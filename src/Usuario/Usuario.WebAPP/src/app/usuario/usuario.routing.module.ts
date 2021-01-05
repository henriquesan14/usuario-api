import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { EditUsuarioComponent } from './edit-usuario/edit-usuario.component';
import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';

const routes: Routes =  [
    {path: '', component: ListUsuariosComponent},
    {path: 'cadastro', component: CadastroUsuarioComponent},
    {path: ':id', component: EditUsuarioComponent},
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class UsuarioRoutingModule{}