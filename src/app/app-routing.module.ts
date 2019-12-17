import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./_modules/main/main.module`).then(m => m.MainModule)
  },
  {
    path: 'espacio',
    loadChildren: () => import(`./_modules/espacio/espacio.module`).then(m => m.EspacioModule)
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
