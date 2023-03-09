import {Titulo} from './Titulo';

/**
 * This is a class that extends the class Titulo
 */
export class Pelicula extends Titulo {
    /**
     * El constructor inicializa los parametos de la clase cuando se crea un objeto
     * @param nombre es el nombre del del titulo
     * @param duracionTotal es la duracion total
     * @param ano año de salida
     * @param precio su precio de alquiler
     * @param director es el director de la pelicula
     */
    constructor(protected nombre: string, protected duracionTotal: number, protected ano: number, protected precio: number, protected director: string) {
        super(nombre, duracionTotal, ano, precio);
    }
    
    /**
     * Es el getter del director de la pelicula
     * @return retorna el nombre del director de la película
     */
    getDirector(): string {
        return this.director;
    }
}