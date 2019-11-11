import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: './_modules/main/main.module#MainModule'
  },
  {
    path: 'espacio',
    loadChildren: './_modules/espacio/espacio.module#EspacioModule'
  },
  {
    path: 'files/tavoohoh.pdf', redirectTo: '/files/tavoohoh.pdf'
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
