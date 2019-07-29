import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterContentInit  {
  @Input() public appAutofocus: boolean;

  constructor(private el: ElementRef) { }

  ngAfterContentInit() {

    setTimeout(() => {
      this.el.nativeElement.focus();
    }, 500);
  }

}
