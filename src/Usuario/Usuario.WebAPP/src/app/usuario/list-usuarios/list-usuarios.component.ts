import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario.interface';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.scss']
})
export class ListUsuariosComponent implements OnInit {

  constructor(private service: UsuarioService, private router: Router) { }

  usuarios: Usuario[];

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(){
    this.service.getAll().subscribe(res => {
      this.usuarios = res;
    });
  }

  deleteUsuario(id: number) {
    this.service.deleteUsuario(id).subscribe(
      () => {
        this.getUsuarios();
      }
    );
  }

  newUsuario() {
    this.router.navigate(['/usuarios/cadastro']);
  }

  editUsuario(id: number){
    this.router.navigate([`/usuarios/${id}`]);
  }

}
