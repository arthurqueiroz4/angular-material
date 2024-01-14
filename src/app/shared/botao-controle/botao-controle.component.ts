import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-controle',
  templateUrl: './botao-controle.component.html',
  styleUrls: ['./botao-controle.component.scss']
})
export class BotaoControleComponent implements OnInit {

  @Input() operador: 'incrementar' | 'decrementar' = 'incrementar';
  src: string = '';
  alt: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
