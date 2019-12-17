import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <section class="main_page">
    <!-- HEADER -->
    <app-widget-main-header></app-widget-main-header>
    <!-- BODY -->
    <router-outlet></router-outlet>
    <!-- FOOTER -->
    <app-widget-main-footer></app-widget-main-footer>
  </section>
  `,
})
export class MainComponent {}
