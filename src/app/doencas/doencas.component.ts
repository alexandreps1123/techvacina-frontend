import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doenca } from '../models/doenca.model';
import { LembreteVacinacao } from '../models/lembrete-vacinacao.model';

@Component({
  selector: 'app-doencas',
  templateUrl: './doencas.component.html',
  styleUrls: ['./doencas.component.css']
})
export class DoencasComponent implements OnInit {

  listaDoencas: Doenca[] = [];
  lembreteCadastrado: any;
  listaLembretes: LembreteVacinacao[] = [];

  // lembreteCadastrado: LembreteVacinacao;

  postObjeto = {
    clienteId: 0,
    doencaNome: ''
  };

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.carregarDoencas();
    this.carregarLembretes();
  }

  carregarDoencas(): void {
    this.http.get('http://localhost:8080/v1/api/doenca/all').subscribe(
      (res: any)  => {
        console.log(res);
        this.listaDoencas = res;
      }
    );
  }

  carregarLembretes(): void {
    this.http.get('http://localhost:8080/v1/api/lembretevacinacao/cliente/1').subscribe(
      (res: any)  => {
        console.log(res);
        this.listaLembretes = res;
      }
    );
  }

  cadastrarLembreteVacinacao(doencaNome: string) {

    this.postObjeto.clienteId = 1;
    this.postObjeto.doencaNome = doencaNome;

    this.http.post('http://localhost:8080/v1/api/lembretevacinacao', this.postObjeto).subscribe(
      (res: any)  => {
        console.log(res);
        this.lembreteCadastrado = res;
        window.alert('alerta para o dia ' + this.lembreteCadastrado.data);
      }
    );

    this.carregarLembretes();
  }

}
