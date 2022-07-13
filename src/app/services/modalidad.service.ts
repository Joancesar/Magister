import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceFirebase } from '../core/iservicefirebase.service';
import { Modalidad } from '../models/modalidad.model';

@Injectable({
  providedIn: 'root'
})
export class ModalidadService extends ServiceFirebase<Modalidad> {

  constructor(firestore: AngularFirestore) { 
    super(Modalidad, firestore, 'modalidades');
  }
}
