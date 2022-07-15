import { Comunidad } from "./comunidad.model";
import { Horario } from "./horario.model";
import { Modalidad } from "./modalidad.model";
import { Model } from "./model";
import { Provincia } from "./provincia.model";
import { Rama } from "./rama.model";
import { Tarifa } from "./tarifa.model";

export class Matricula extends Model {
    
    rama: Rama;
    provincia: Provincia;
    haSidoAlumno: string;
    entregaMaterial: string;
    modalidad: Modalidad;
    horario: Horario;
    tarifa: Tarifa;
    nombre: string;
    dni: string;
    movil: string;
    email: string;
    comunidad: Comunidad;
    direccion: string;
    dirLocalidad: string;
    dirProvincia: string;
    dirCodigoPostal: string;
    tipoPago: string;
    esRecomendado: string;
    
}
