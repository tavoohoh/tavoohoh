import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConsoleService } from './console.service';

@Component({
  selector: 'app-widget-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {
  public userInput: string;
  public ngModelOptions = {
    standalone: true
  };

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
