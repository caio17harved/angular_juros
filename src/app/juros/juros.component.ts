import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros',
  templateUrl: './juros.component.html',
  styleUrls: ['./juros.component.css']
})
export class JurosComponent implements OnInit {
  //declaração de variaveis
  vp: number;
  j: number;
  n: number;

  constructor() {
      this.vp = 100;
      this.j  = 2.5;
      this.n  = 3;

   }

  ngOnInit() {}
    getJuros() {
      return this.vp * (1 + this.j/100  *this.n );
    };
  
//colocar a formula dentro do for para preencher a tabela
}