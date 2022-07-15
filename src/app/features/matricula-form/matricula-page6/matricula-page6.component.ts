import { Component, OnInit } from '@angular/core';
import { FormInfoService } from 'src/app/services/form-info.service';

@Component({
  selector: 'app-matricula-page6',
  templateUrl: './matricula-page6.component.html',
  styleUrls: [
    '../matricula-form.component.css',
    './matricula-page6.component.css'
  ]
})
export class MatriculaPage6Component implements OnInit {
  
  pagoOptions = [
    { 
      label: "Tarjeta de crédito/débito (recomendado)", 
      value: "Tarjeta de crédito/débito (recomendado)"
    },  
    { label: "Transferencia bancaria", value: "Transferencia bancaria"},  
  ];
    
  recomendadoOptions = [
    { label: "No", value: false },  
    { label: "Sí", value: true },  
  ];

  constructor(
    public formInfo: FormInfoService
  ) { }

  ngOnInit(): void {
  }
  
  test() {
    console.log(this.formInfo.matricula)
  }

}
