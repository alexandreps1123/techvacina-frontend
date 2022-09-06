import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PostoSaudeComponent } from './posto-saude/posto-saude.component';
import { DoencasComponent } from './doencas/doencas.component';
import { LembretesComponent } from './lembretes/lembretes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'usuario',
    loadChildren: () =>
      import('./usuario/usuario-routing.module').then(
        (m) => m.UsuarioRoutingModule
      ),
  },
  { path: 'posto', component: PostoSaudeComponent },
  { path: 'login', component: PaginaLoginComponent },
  { path: 'main', component: PaginaPrincipalComponent },
  { path: 'proximas_vacinas', component: DoencasComponent },
  { path: 'postos', component: PostoSaudeComponent },
  { path: 'alertas', component: LembretesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
