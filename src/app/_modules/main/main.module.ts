import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Modules
import { SharedModule } from '../shared.module';

// Components
import { HomeComponent } from './home/home.component';
import {
  ConsoleComponent,
  MainHeaderComponent,
  MainFooterComponent
} from '@app/_widgets';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: 'contact',
    component: HomeComponent
  },
];

@NgModule({
  declarations: [
    MainHeaderComponent,
    MainFooterComponent,
    ConsoleComponent,
    HomeComponent,
    AboutMeComponent,
    PortfolioComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  providers: [

  ]
})
export class MainModule { }
