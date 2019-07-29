// Angular dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// External dependencies
import { TranslateModule } from '@ngx-translate/core';

// Directives
import { AutofocusDirective } from '@app/_directives';


@NgModule({
  declarations: [
    AutofocusDirective,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    AutofocusDirective
  ]
})
export class SharedModule { }
