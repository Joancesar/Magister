import { Injectable } from '@angular/core';
import { Matricula } from '../models/matricula.model';
import { Rama } from '../models/rama.model';

@Injectable({
  providedIn: 'root'
})
export class FormInfoService {

  public matricula: Matricula = new Matricula();
  
  public error;
  
  constructor() { 
  }
  
  isValid() {
    let matr = this.matricula;
    if(!matr.rama || !matr.provincia || !matr.haSidoAlumno 
    || !matr.entregaMaterial || !matr.modalidad || !matr.horario 
    || !matr.tarifa || !matr.nombre || !matr.dni 
    || !matr.movil || !matr.email || !matr.comunidad
    || !matr.direccion || !matr.dirLocalidad || !matr.dirProvincia 
    || !matr.dirCodigoPostal || !matr.tipoPago || !matr.esRecomendado) {
      this.error = "Faltan campos por completar"
      return false;
    }
    this.error = ""
    return true;
  }
  
}
