import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostoSaudeComponent } from './posto-saude/posto-saude.component';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, PostoSaudeComponent, PaginaLoginComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
