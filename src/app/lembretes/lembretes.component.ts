import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LembreteVacinacao } from '../models/lembrete-vacinacao.model';

@Component({
  selector: 'app-lembretes',
  templateUrl: './lembretes.component.html',
  styleUrls: ['./lembretes.component.css']
})
export class LembretesComponent implements OnInit {

  listaLembretes: LembreteVacinacao[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.carregarLembretes();
  }

  carregarLembretes(): void {
    this.http.get('http://localhost:8080/v1/api/lembretevacinacao/all').subscribe(
      (res: any)  => {
        console.log(res);
        this.listaLembretes = res;
      }
    );
  }

}
