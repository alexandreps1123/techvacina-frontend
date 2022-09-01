import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { PostoSaudeComponent } from './posto-saude/posto-saude.component';



const routes: Routes = [
  {path: 'posto', component: PostoSaudeComponent},
  {path: 'login', component: PaginaLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
