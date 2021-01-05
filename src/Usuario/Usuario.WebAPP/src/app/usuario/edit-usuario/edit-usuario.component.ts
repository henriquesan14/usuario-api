import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { isBefore, isEqual } from 'date-fns';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})
export class EditUsuarioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private activatedRoute: ActivatedRoute, private service: UsuarioService) { }

  editForm: FormGroup;

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params.id;
    this.editForm = this.formBuilder.group({
      id: [],
      nome: [null, Validators.required],
      sobrenome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      escolaridade: [null, Validators.required],
      data: [null, Validators.required],
      createdAt: [],
      updatedAt: []
    });
    this.service.getUsuario(id).subscribe((res) => {
      let ano = res.data.substring(0,4);
      let mes = res.data.substring(5,7);
      let dia = res.data.substring(8, 10);
      res.data = `${ano}-${mes}-${dia}`;
      this.editForm.setValue(res);
    });
  }

  onSubmit() {
    let id = this.activatedRoute.snapshot.params.id;
    const dataInvalid = this.dataInvalida();
    if(this.editForm.valid && !dataInvalid){
      this.service.updateUsuario(this.editForm.value, id)
      .subscribe( () => {
        this.router.navigate(['/usuarios']);
      });
    }
  }

  validaCampo(field: string){
    return this.editForm.get(field).touched && !this.editForm.get(field).valid;
  }

  verificaEmailInValido(){
    let campoEmail = this.editForm.get('email')
    if(campoEmail.errors){
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  dataInvalida(): boolean{
    let campoData: string = this.editForm.get('data').value;
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
