import { Component, OnInit } from '@angular/core';
import { PostoSaude } from '../models/posto-saude.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posto-saude',
  templateUrl: './posto-saude.component.html',
  styleUrls: ['./posto-saude.component.css']
})
export class PostoSaudeComponent implements OnInit {

  listaPostoSaude: PostoSaude[] = [];
  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.carregarPostos();
  }

  carregarPostos(): void {
    this.http.get('http://localhost:8080/v1/api/posto/all').subscribe(
      (res: any)  => {
        console.log(res);
        this.listaPostoSaude = res;
      }
    );
  }

}
