import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  ngOnInit(){  }

  openDialog() {
    console.log("Entroy");
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '50%'
    });
  }
}
