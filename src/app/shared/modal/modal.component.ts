import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categoriaSelecionada: string | undefined;

  logar(){
    console.log(this.categoriaSelecionada);
  }

}
