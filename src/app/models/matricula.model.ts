import { Comunidad } from "./comunidad.model";
import { Horario } from "./horario.model";
import { Modalidad } from "./modalidad.model";
import { Model } from "./model";
import { Provincia } from "./provincia.model";
import { Rama } from "./rama.model";
import { Tarifa } from "./tarifa.model";

export class Matricula extends Model {
    
    rama: string;
    provincia: string;
    haSidoAlumno: string;
    entregaMaterial: string;
    modalidad: string;
    horario: string;
    tarifa: string;
    nombre: string;
    dni: string;
    movil: string;
    email: string;
    comunidad: string;
    direccion: string;
    dirLocalidad: string;
    dirProvincia: string;
    dirCodigoPostal: string;
    tipoPago: string;
    esRecomendado: string;
    dateTime: string;
}
