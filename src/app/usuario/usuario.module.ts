import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario.component';
import { BrowserModule } from '@angular/platform-browser';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UsuarioComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule
  ],
  exports: [
    UsuarioComponent
  ]
})
export class UsuarioModule { }
