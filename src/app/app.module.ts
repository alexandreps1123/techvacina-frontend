import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { PostoSaudeComponent } from './posto-saude/posto-saude.component';
import { UsuarioModule } from './usuario/usuario.module';
import { ButtonOptionsComponent } from './button-options/button-options.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { VacinasFuturasComponent } from './vacinas-futuras/vacinas-futuras.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostoSaudeComponent,
    CabecalhoComponent,
    PaginaLoginComponent,
    HeaderComponent,
    InputComponent,
    ButtonComponent,
    ButtonOptionsComponent,
    PaginaPrincipalComponent,
    VacinasFuturasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UsuarioModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
