import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceFirebase } from '../core/iservicefirebase.service';
import { Horario } from '../models/horario.model';

@Injectable({
  providedIn: 'root'
})
export class HorarioService extends ServiceFirebase<Horario> {

  constructor(firestore: AngularFirestore) {
    super(Horario, firestore, 'horarios');
  }  
}
