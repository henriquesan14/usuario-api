import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { isBefore, isEqual } from 'date-fns';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private service: UsuarioService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      nome: [null, Validators.required],
      sobrenome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      escolaridade: [null, Validators.required],
      data: [null, Validators.required]
    });
  }

  onSubmit() {
    const dataInvalid = this.dataInvalida();
    if(this.addForm.valid && !dataInvalid){
      this.service.saveUsuario(this.addForm.value)
      .subscribe( () => {
        this.router.navigate(['/usuarios']);
      });
    }
  }

  validaCampo(field: string){
    return this.addForm.get(field).touched && !this.addForm.get(field).valid;
  }

  verificaEmailInValido(){
    let campoEmail = this.addForm.get('email')
    if(campoEmail.errors){
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  dataInvalida(): boolean{
    let campoData: string = this.addForm.get('data').value;
    if(campoData){
      let dataAtual = new Date();
      let ano = parseInt(campoData.substring(0,4));
      let mes = parseInt(campoData.substring(5,7));
      let dia = parseInt(campoData.substring(8, 11));
      let data1 = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate(), 0, 0, 0);
      let data2 = new Date(ano, mes -1, dia, 0,0,0);
      let dataInvalida = isBefore(data1, data2) ||  isEqual(data2, data1);
      return dataInvalida;
    }
    return false;
  }

}
