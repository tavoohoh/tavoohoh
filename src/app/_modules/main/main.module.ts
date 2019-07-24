import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Modules
import { SharedModule } from '../shared.module';

// Components
import { HomeComponent } from './home/home.component';
import { ConsoleComponent } from '@app/_widgets';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    ConsoleComponent
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
