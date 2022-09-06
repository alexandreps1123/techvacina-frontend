import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.fb.group({
      nome: [""]
    });
  }

  cadastrar(): void {
    if(this.novoUsuarioForm.valid) {
      console.log(this.novoUsuarioForm.value);
    }
  }

}
