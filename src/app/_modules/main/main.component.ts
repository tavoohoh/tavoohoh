import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <section class="main_page">
    <!-- HEADER -->
    <span>
      <app-widget-main-header></app-widget-main-header>
    </span>
    <!-- BODY -->
    <span>
      <router-outlet></router-outlet>
    </span>
    <!-- FOOTER -->
    <span>
      <app-widget-main-footer></app-widget-main-footer>
    </span>
  </section>
  `,
})
export class MainComponent {}
