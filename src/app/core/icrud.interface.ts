import { Observable } from "rxjs";
/**
 * Interfaz ICrud para aislar definición de metodos 
 * de nuestras implementaciones segun que servicio (Firebase, etc)
 */
export interface ICrud<T> {
    
    get(id: string): Observable<T>;
    list(): Observable<T[]>;
    createOrUpdate(item: T): Promise<T>;
    delete(id: string): Promise<void>
}