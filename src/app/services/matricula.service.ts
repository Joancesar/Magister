import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceFirebase } from '../core/iservicefirebase.service';
import { Matricula } from '../models/matricula.model';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService extends ServiceFirebase<Matricula> {

  constructor(firestore: AngularFirestore) { 
    super(Matricula, firestore, 'matriculas');
  }
}
