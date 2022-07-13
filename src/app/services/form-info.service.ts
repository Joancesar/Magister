import { Injectable } from '@angular/core';
import { Matricula } from '../models/matricula.model';
import { Rama } from '../models/rama.model';

@Injectable({
  providedIn: 'root'
})
export class FormInfoService {

  public matricula: Matricula = new Matricula();
  
  constructor() { 
  }
  
}
