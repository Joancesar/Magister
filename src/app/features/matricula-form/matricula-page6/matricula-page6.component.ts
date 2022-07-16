import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { FormInfoService } from 'src/app/services/form-info.service';
import { MatriculaService } from 'src/app/services/matricula.service';

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
    { label: "No", value: "No" },  
    { label: "Sí", value: "Sí" },  
  ];
  
  form!: FormGroup;

  constructor(
    public formInfo: FormInfoService,
    private rootFormGroup: FormGroupDirective
  ) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get("pagina6") as FormGroup;
  }


}
