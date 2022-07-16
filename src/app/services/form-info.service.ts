import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Matricula } from '../models/matricula.model';
import { Rama } from '../models/rama.model';

@Injectable({
  providedIn: 'root'
})
export class FormInfoService {
  
  public error;
  
  matriculaForm = this.fb.group({
    pagina1: this.fb.group({
      rama: ["Secundaria - Biología y Geología", [Validators.required]],
      provincia: ["Almería", [Validators.required]],
      haSidoAlumno: ["Sí", [Validators.required]],
      entregaMaterial: ["Material mes a mes", [Validators.required]],
    }),
    pagina2: this.fb.group({
      modalidad: ["Semipresencial 2020/2021", [Validators.required]],
      horario: [
        "1 Clase al mes Prácticos y Programación martes por mañana. Grupo 1 de 10 a 14 horas", 
        [Validators.required]
      ],
    }),
    pagina3: this.fb.group({
      tarifa: [
        "Inicio febrero 2021. Nuevo alumno SEMIPRESENCIAL - Material mes a mes - Matrícula 101.00 euros",
        [Validators.required]
      ],
    }),
    pagina4: this.fb.group({
      nombre: ["Joan César García leon", [Validators.required]],
      dni: ['06641181T', [Validators.required]],
      movil: ['692345763', [Validators.required]],
      email: ['joancesar@hotmail.com', [Validators.required]],
    }),
    pagina5: this.fb.group({
      comunidad: ["Castilla y León", [Validators.required]],
      direccion: ['Calle Lago Salado 18', [Validators.required]],
      dirLocalidad: ['Madrid', [Validators.required]],
      dirProvincia: ['Madrid', [Validators.required]],
      dirCodigoPostal: ["28017", [Validators.required]],
    }),
    pagina6: this.fb.group({
      tipoPago: ["Tarjeta de crédito/débito (recomendado)", [Validators.required]],
      esRecomendado: ["No", [Validators.required]],
    }),
  });
  constructor(private fb: FormBuilder) { 
  }
  
  isValid() {
    console.log("AQUI PASA")
    if(!this.matriculaForm.valid) {
      this.error = "Uno o mas campos tienen algun error, por favor revísalo"
      console.log(this.matriculaForm.controls)
      return false;
    }
    this.error = ""
    return true;
  }
  
  resetForm() {
    this.matriculaForm.reset();
  }
  
}
