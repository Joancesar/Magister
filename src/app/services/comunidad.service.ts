import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceFirebase } from '../core/iservicefirebase.service';
import { Comunidad } from '../models/comunidad.model';

@Injectable({
  providedIn: 'root'
})
export class ComunidadService extends ServiceFirebase<Comunidad>{

  constructor(firestore: AngularFirestore) { 
    super(Comunidad, firestore, 'comunidades');
  }
}
