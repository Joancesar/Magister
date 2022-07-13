import { instanceToPlain } from "class-transformer";
/**
 * Class abstracta que representa un modelo
 */
export abstract class Model {
    id: string;
    /**
     * Funcion que deserializa un objecto con clase a un plano
     * 
     * Esto sirve para prevenir errores como el guardar objectos customizados
     * de firestore
     * 
     * @returns un JavaScript object plano
     */
    toObject(): object {
        let obj = instanceToPlain(this);
        delete obj.id;
        return obj
    }
}