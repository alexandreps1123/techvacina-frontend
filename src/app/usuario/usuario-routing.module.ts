import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
  {
    path: "",
    component: UsuarioComponent,
    children: [
      { path: "novo", component: CadastroUsuarioComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
