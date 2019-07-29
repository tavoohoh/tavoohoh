import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  onCheckUserInput(el: HTMLElement) {
    this.bashContent.nativeElement.insertAdjacentHTML(
      'beforeend',
      `<p class="bsh_txt">${this.userInput}</p>`
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
