import {Titulo} from './Titulo';

/**
 * This is a class that extends the class Titulo
 */
export class Documental  extends Titulo {
    /**
     * El constructor inicializa los parametos de la clase cuando se crea un objeto
     * @param nombre es el nombre del del titulo
     * @param duracionTotal es la duracion total
     * @param ano año de salida
     * @param precio su precio de alquiler
     * @param productora es la productora del documental
     */
    constructor(protected nombre: string, protected duracionTotal: number, protected ano: number, protected precio: number, protected productora: string) {
        super(nombre, duracionTotal, ano, precio);
    }
    
    /**
     * Es el getter de la productora
     * @return retorna el nombre de la productora del documental
     */
    getProductora(): string {
        return this.productora;
    }
}