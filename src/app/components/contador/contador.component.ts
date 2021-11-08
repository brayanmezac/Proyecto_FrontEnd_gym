import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  numero:number = 0;


  /***Funcion Sumar y Restar */
  sumar(){
    this.numero +=1;
  }

  restar(){
    this.numero -=1;
  }
  accionOperacion( valor:number ){
    this.numero +=valor;
  }

  ngOnInit(): void {
  }

}
