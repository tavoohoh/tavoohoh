import { Injectable, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ConsoleService {
  public command: string;
  public bash: ElementRef;

  constructor(private router: Router) { }

  public async readConsole(bash: ElementRef, command: string) {
    this.command = command;
    this.bash = bash;

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
        console.log('reset');
        // resetCommand();
        break;

      case 'hi':
        console.log('What\'s up Emma?');
        // talkCommand(command);
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
   * Check if input is a know command
   */
  private line(i: string, c: string) {
    return i.includes(c);
  }

  /**
   * Check if bash is attemping to talk to Emma
   */
  private emmaCheck() {
    const command = this.command;

    if (
      this.line(command.toLowerCase(), 'emma') ||
      this.line(command.toLowerCase(), 'hello') ||
      this.line(command.toLowerCase(), 'hey') ||
      (this.line(command.toLowerCase(), 'hi') && command.toLowerCase().length === 2) ||
      this.line(command.toLowerCase(), 'whats up')
    ) {
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

}
