import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceFirebase } from '../core/iservicefirebase.service';
import { Rama } from '../models/rama.model';

@Injectable({
  providedIn: 'root'
})
export class RamaService extends ServiceFirebase<Rama> {

  constructor(firestore: AngularFirestore) {
    super(Rama, firestore, 'ramas');
  }
  
}
