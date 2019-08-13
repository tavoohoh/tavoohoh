import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Modules
import { SharedModule } from '../shared.module';

// Components
import { EspacioNavigationComponent } from '@app/_widgets';
import { LoginComponent } from './login/login.component';
import { ShuttleComponent } from './shuttle/shuttle.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'shuttle',
    component: ShuttleComponent
  }
];

@NgModule({
  declarations: [
    EspacioNavigationComponent,
    LoginComponent,
    ShuttleComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class EspacioModule { }
