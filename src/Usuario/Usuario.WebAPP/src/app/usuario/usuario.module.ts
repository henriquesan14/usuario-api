import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { SharedModule } from '../shared/shared.module';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUsuarioComponent } from './edit-usuario/edit-usuario.component';

@NgModule({
  declarations: [ListUsuariosComponent, CadastroUsuarioComponent, EditUsuarioComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
