import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'usuarios', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)},
  {path:'', pathMatch: 'full', redirectTo: 'pedidos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
