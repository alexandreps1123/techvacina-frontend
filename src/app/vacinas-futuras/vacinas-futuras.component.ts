import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vacinas-futuras',
  templateUrl: './vacinas-futuras.component.html',
  styleUrls: ['./vacinas-futuras.component.css']
})
export class VacinasFuturasComponent implements OnInit {

  listaVacinasFuturas: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.carregarVacinasFuturas();
  }

  carregarVacinasFuturas(): void {
    this.http.get('http://localhost:8080/v1/api/vacinacaopendente/all').subscribe(
      (res: any)  => {
        console.log(res);
        this.listaVacinasFuturas = res;
      }
    );
  }

}
