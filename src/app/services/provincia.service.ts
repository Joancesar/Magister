import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceFirebase } from '../core/iservicefirebase.service';
import { Provincia } from '../models/provincia.model';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService extends ServiceFirebase<Provincia> {

  constructor(firestore: AngularFirestore) {
    super(Provincia, firestore, 'provincias');
  }
}
