import {Titulo} from './Titulo';

/**
 * This is a class that extends the class Titulo
 */
export class Serie extends Titulo {
    /**
     * El constructor inicializa los parametos de la clase cuando se crea un objeto
     * @param nombre es el nombre del del titulo
     * @param duracionTotal es la duracion total
     * @param ano año de salida
     * @param precio su precio de alquiler
     * @param numeroTemporadas retorna las temporadas que tiene la serie
     */
    constructor(protected nombre: string, protected duracionTotal: number, protected ano: number, protected precio: number, protected numeroTemporadas: number) {
        super(nombre, duracionTotal, ano, precio);
    }

    /**
     * Es el getter del  numero de temporadas
     * @return retorna el numero de temporadas que tiene la serie
     */
    getTemporadas(): number {
        return this.numeroTemporadas;
    }
}