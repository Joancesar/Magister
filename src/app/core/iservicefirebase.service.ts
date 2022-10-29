import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { plainToClass } from "class-transformer";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Model } from "../models/model";
import { ICrud } from "./icrud.interface";
/**
 * Clase abstracta ServiceFirebase que implementa los métodos de ICrud 
 * para nuestro cloud Firebase
 */
export abstract class ServiceFirebase<T extends Model> implements ICrud<T> {
    
    ref: AngularFirestoreCollection<T>;
    
    constructor(
        protected type: { new(): T; }, 
        protected firestore: AngularFirestore,
        public path: string ) {
        this.ref = this.firestore.collection<T>(this.path)
    }
    
    docToClass(snapshotDoc): T {
        let obj = {
            id: snapshotDoc.id,
            ...(snapshotDoc.data() as T)
        }
        let typed = plainToClass(this.type, obj);
        return typed;
    }
    
    get(id: string): Observable<T> {
        let doc = this.ref.doc<T>(id);
        return doc.get().pipe(map(snapshot => this.docToClass(snapshot)));
    }
    
    list(): Observable<T[]> {
        return this.ref.valueChanges();
    }
    
    createOrUpdate(item: T): Promise<any> {
        let id = item.id;
        if (!item)
            return
        let obj = null;

        if (item instanceof this.type)
            obj = item.toObject();
        else
            obj = item;
        //Update
        if (id) {
            return this.ref.doc(id).set(obj);
        }
        //Create
        else {
            /*  
                Fake insert de Matriculas para poder
                mostrarlo en github pages
            */
            if(this.path == 'matriculas') {
                return Promise.resolve()
            }
            return this.ref.add(obj)
            .then(res => {
                obj.id = res.id; // Para guardar con el atributo id
                this.ref.doc(res.id).set(obj);
            })
        }
    }
    
    delete(id: string): Promise<void> {
        return this.ref.doc(id).delete();
    }
    
}