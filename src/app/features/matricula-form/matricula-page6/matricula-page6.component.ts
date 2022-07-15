import { Component, OnInit } from '@angular/core';
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
  
  loading = false;
  
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

  constructor(
    public formInfo: FormInfoService,
    private matriculaService: MatriculaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  enviarFormulario() {
    this.loading = true;
    console.log(this.formInfo.matricula);
    if(this.formInfo.isValid()) {
      this.matriculaService.createOrUpdate(this.formInfo.matricula)
      .then(() => {
        this.loading = false;
        this.router.navigateByUrl("/matricula/success");
      })
      .catch((err) => {
        this.loading = false;
      })
    } else {
      
      this.loading = false;
    }
    
  }

}
