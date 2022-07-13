import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceFirebase } from '../core/iservicefirebase.service';
import { Tarifa } from '../models/tarifa.model';

@Injectable({
  providedIn: 'root'
})
export class TarifaService extends ServiceFirebase<Tarifa> {

  constructor(firestore: AngularFirestore) { 
    super(Tarifa, firestore, 'tarifas');
  }
}
