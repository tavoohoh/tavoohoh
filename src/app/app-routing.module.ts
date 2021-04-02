import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import(`./_modules/main/main.module`).then(m => m.MainModule)
    loadChildren: () => import('./_modules/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'espacio',
    // loadChildren: () => import(`./_modules/espacio/espacio.module`).then(m => m.EspacioModule)
    loadChildren: () => import('./_modules/espacio/espacio.module').then(m => m.EspacioModule)
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
