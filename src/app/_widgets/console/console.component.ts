import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ConsoleService } from './console.service';
import { Subscription, fromEvent } from 'rxjs';


@Component({
  selector: 'app-widget-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit, OnDestroy {
  public userInput: string;
  public ngModelOptions = {
    standalone: true
  };
  private subscription: Subscription;

  @ViewChild(
    'bashContent',
    {
      static: false
    }
  ) bashContent: ElementRef;

  @ViewChild(
    'bInput',
    {
      static: false
    }
  ) bInput: ElementRef;

  constructor(
    private consoleService: ConsoleService
  ) { }

  ngOnInit() {
    this.subscription = fromEvent(document, 'keydown')
      .subscribe((e: KeyboardEvent) => {
        const keyCode = e.keyCode;

        if (keyCode === 9) {
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
