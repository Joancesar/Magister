import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Matricula } from '../models/matricula.model';
import { Rama } from '../models/rama.model';

@Injectable({
  providedIn: 'root'
})
export class FormInfoService {
  
  public error;
  
  public isSubmitted = false;
  
  matriculaForm = this.fb.group({
    pagina1: this.fb.group({
      rama: ["", [Validators.required]],
      provincia: ["", [Validators.required]],
      haSidoAlumno: ["", [Validators.required]],
      entregaMaterial: ["", [Validators.required]],
    }),
    pagina2: this.fb.group({
      modalidad: ["", [Validators.required]],
      horario: [
        "", 
        [Validators.required]
      ],
    }),
    pagina3: this.fb.group({
      tarifa: [
        "",
        [Validators.required]
      ],
    }),
    pagina4: this.fb.group({
      nombre: ["", [Validators.required]],
      dni: ['', [Validators.required]],
      movil: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    }),
    pagina5: this.fb.group({
      comunidad: ["", [Validators.required]],
      direccion: ['', [Validators.required]],
      dirLocalidad: ['', [Validators.required]],
      dirProvincia: ['', [Validators.required]],
      dirCodigoPostal: ["", [Validators.required]],
    }),
    pagina6: this.fb.group({
      tipoPago: ["", [Validators.required]],
      esRecomendado: ["", [Validators.required]],
    }),
  });
  constructor(private fb: FormBuilder) { 
  }
  
  isValid() {
    if(!this.matriculaForm.valid) {
      this.error = "Uno o más campos tienen algún error, por favor revíselo"
      return false;
    }
    this.error = ""
    return true;
  }
  
  resetForm() {
    this.isSubmitted = false;
    this.matriculaForm.reset();
  }
  
}
