import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matricula-form',
  templateUrl: './matricula-form.component.html',
  styleUrls: ['./matricula-form.component.css']
})
export class MatriculaFormComponent implements OnInit {

  constructor() { }

  steps = [
    { label: "¿En qué te quieres especializar?", routerLink: "/matricula/form/1" },
    { label: "Horario y Modalidad", routerLink: "/matricula/form/2" },
    { label: "Tarifa", routerLink: "/matricula/form/3" },
    { label: "Datos personales", routerLink: "/matricula/form/4" },
    { label: "Dirección", routerLink: "/matricula/form/5" },
    { label: "Forma de pago", routerLink: "/matricula/form/6" }
  ]
  
  ngOnInit(): void {
  }

}
