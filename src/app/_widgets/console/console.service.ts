import { Injectable, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, fromEvent } from 'rxjs';

import {
  greatings,
  emma,
  greaTingsResponse,
  gustavo,
  leave,
  salutation,
  website,
  defaults,
  meaningOfLife
} from './answers';

@Injectable({ providedIn: 'root' })
export class ConsoleService implements OnDestroy {
  public command: string;
  public bash: ElementRef;
  public emma = false;
  private subscription: Subscription;

  constructor(private router: Router) { }

  public async readConsole(bash: ElementRef, command: string) {
    this.command = command;
    this.bash = bash;

    if (this.emma) {
      return this.talkCommand();
    }

    await this.emmaCheck();

    switch (this.command) {
      case 'help':
        this.helpCommand();
        break;

      case 'pages':
        this.pagesCommand();
        break;

      case 'nav':
        this.write(`
          <p class="bsh_txt">
            Use the
            <span class="info">nav</span>
            command as follow:
          </p>
          <p class="bsh_txt">
            &nbsp;&nbsp;
            <span class="info">nav</span>
            &lt;page&gt;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="muted">
              Navigate website pages
            </span>
          </p>
        `);
        break;

      case String(this.command.match(/^nav .*/)):
        this.navCommand();
        break;

      case 'clear':
        this.clearCommand();
        break;

      case 'rm -rf /*':
        this.resetCommand();
        break;

      case 'hi':
        this.talkCommand();
        break;

      default:
        this.write(`
          <p class="bsh_txt">
            <span class="danger">
              Command "${this.command}" not found.
            </span>
          </p>
        `);
    }
  }

  /**
   * Write into the bash
   * @param command optional parameter.
   * Default: The command entered.
   */
  private write(
    command: string = `<p class="bsh_txt">${this.command}</p>`
  ) {
    this.bash.nativeElement.insertAdjacentHTML(
      'beforeend',
      command
    );
  }

  /**
   * Check if bash is attemping to talk to Emma
   */
  private emmaCheck() {
    const command = this.command;

    if (/(hello|hi|hi |hey|whats up|what's up|hola)/.test(command)) {
      this.command = 'hi';
    }
  }

  /***********************/
  /*  Commands response  */
  /***********************/

  /**
   * Write a list of available commands
   */
  private helpCommand() {
    this.write(`
      <p class="bsh_txt">
        <span class="primary">help</span>,
        available commands:
      </p>
    `);

    // nav
    this.write(`
      <p class="bsh_txt">
        &nbsp;&nbsp;
        <span class="info">nav</span>
        &lt;page&gt;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span class="muted">
          Navigate website pages
        </span>
      </p>
    `);

    // pages
    this.write(`
      <p class="bsh_txt">
        &nbsp;&nbsp;
        <span class="info">pages</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="muted">
          List of available pages
        </span>
      </p>
    `);

    // clear
    this.write(`
      <p class="bsh_txt">
        &nbsp;&nbsp;
        <span class="info">clear</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="muted">
          Clear the bash
        </span>
      </p>
    `);

    // rm -rf /*
    this.write(`
      <p class="bsh_txt">
        &nbsp;&nbsp;
        <span class="info">rm -rf /*</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="muted">
          Do not call this
        </span>
      </p>
    `);
  }

  /**
   * Write a list of available page
   */
  private pagesCommand() {
    this.write(`
      <p class="bsh_txt">
        <span class="primary">pages</span>,
        available pages:
      </p>
    `);

    this.write(`
      <p class="bsh_txt">
        &nbsp;&nbsp;
        <span class="info">home</span>
        &nbsp;&nbsp;
        <span class="info">portfolio</span>
        &nbsp;&nbsp;
        <span class="info">about me</span>
        &nbsp;&nbsp;
        <span class="info">contact</span>
      </p>
    `);
  }

  /**
   * Check nav page
   */
  private navCommand() {
    const command = this.command.replace('nav ', '');

    switch (command) {
      case 'home':
        this.nav('');
        break;

      case 'portfolio':
        this.nav('/portfolio');
        break;

      case 'about me':
        this.nav('/about-me');
        break;

      case 'contact':
        this.nav('/contact');
        break;

      default:
        this.write(`
          <p class="bsh_txt">
            <span class="danger">
              Page not found.
            </span>
          </p>
        `);

        this.pagesCommand();
    }

  }

  /**
   * Navigate to a page
   */
  private nav(page: string) {
    this.router.navigate([page]);
  }

  /**
   * Clear the bash
   */
  private clearCommand() {
    const node = this.bash.nativeElement;

    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  /**
   * Reset the website
   */
  private resetCommand() {
    this.write(`
      <p class="bsh_txt">
        <span class="danger">
          Are you sure about this?
        </span>
      </p>
      <p class="bsh_txt">
        Continue (Y/N)?
      </p>
    `);

    const input = this.bash.nativeElement.nextSibling;
    input.style.display = 'none';

    this.subscription = fromEvent(document, 'keypress')
      .subscribe((e: KeyboardEvent) => {
        const keyCode = e.charCode;

        // To destroy the website
        if (keyCode === 121 || keyCode === 89) {
          this.ngOnDestroy();
          const body = this.bash.nativeElement.offsetParent;

          setTimeout(() => {
            this.write(`
              <p class="bsh_txt">
                <span class="danger">
                  Destroying the DOM...
                </span>
              </p>
            `);
          }, 500);

          setTimeout(() => {
            body.style.cursor = 'none';
            body.style.height = '100vh';
            body.style.transition = '1s';
            this.write(`
              <p class="bsh_txt">
                <span class="danger">
                  Please wait...
                </span>
              </p>
            `);
          }, 1500);

          setTimeout(() => {
            this.write(`
              <p class="bsh_txt">
                Good bye!
              </p>
            `);
          }, 3000);

          setTimeout(() => {
            body.style.backgroundColor = '#ffffff';
            while (body.firstChild) {
              body.removeChild(body.firstChild);
            }
          }, 4000);

          // To cancel
        } else if (keyCode === 110 || keyCode === 78) {
          this.write(`
            <p class="bsh_txt">
              <span class="warning">
                Canceling...
              </span>
            </p>
          `);
          setTimeout(() => {
            input.style.display = 'grid';
          }, 500);

          this.ngOnDestroy();
          // If option is invalid
        } else {
          this.write(`
            <p class="bsh_txt">
              To continue please press:<br>
              "Y" (continue), or "N" (cancel)
              <br><br>
            </p>
          `);
        }
      });

  }

  /**
   * Talk with Emma
   */
  private talkCommand() {
    this.emma = true;
    const command = this.command.toLowerCase();

    const input = this.bash.nativeElement.nextSibling.firstElementChild;
    input.innerText = 'emma:';

    function setResponse(response: string[]) {
      const randomString = Math.floor(
        Math.random() * response.length
      );

      return `<p class="bsh_txt"><span class="muted chat">
      ${response[randomString]}</span></p>`;
    }

    if (emma.regex.test(command)) {
      this.write(setResponse(emma.options));

    } else if (greatings.regex.test(command)) {
      this.write(setResponse(greatings.options));

    } else if (greaTingsResponse.regex.test(command)) {
      this.write(setResponse(greaTingsResponse.options));

    } else if (gustavo.regex.test(command)) {
      this.write(setResponse(gustavo.options));

    } else if (leave.regex.test(command)) {
      this.write(setResponse(leave.options));
      this.emma = false;
      input.innerText = 'tavoohoh:';

    } else if (salutation.regex.test(command)) {
      this.write(setResponse(salutation.options));

    } else if (website.regex.test(command)) {
      this.write(setResponse(website.options));

    } else if (meaningOfLife.regex.test(command)) {
      this.write(setResponse(meaningOfLife.options));

    } else {
      this.write(setResponse(defaults.options));
    }
  }

  ngOnDestroy() {
    // remove listener
    this.subscription.unsubscribe();
  }
}
