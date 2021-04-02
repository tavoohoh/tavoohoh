import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ConsoleService } from './console.service';
import { Subscription, fromEvent } from 'rxjs';


@Component({
  selector: 'app-widget-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit, OnDestroy {
  public userInput = '';
  public ngModelOptions = {
    standalone: true
  };
  private subscription: Subscription;

  @ViewChild('bashContent') bashContent: ElementRef;

  @ViewChild('bInput') bInput: ElementRef;

  constructor(
    private consoleService: ConsoleService
  ) { }

  ngOnInit() {
    this.subscription = fromEvent(document, 'keydown')
      .subscribe((e: KeyboardEvent) => {
        const keyCode = e.code;

        if (keyCode === 'Tab' || keyCode === 'Enter' && this.userInput.length === 0) {
          e.returnValue = false;
          e.preventDefault();
        }
      });
  }

  ngOnDestroy() {
    // remove listener
    this.subscription.unsubscribe();
  }

  read() {
    this.consoleService.readConsole(
      this.bashContent,
      this.userInput
    );
    this.userInput = '';
  }

  /**
   * Focus the user input
   */
  focusUserInput() {
    this.bInput.nativeElement.focus();
  }
}
