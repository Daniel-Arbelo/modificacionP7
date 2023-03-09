/**
 * This is a basic simple class 
 */
export class Titulo {
    /**
     * El constructor inicializa los parametos de la clase cuando se crea un objeto
     * @param nombre es el nombre del del titulo
     * @param duracionTotal es la duracion total
     * @param ano año de salida
     * @param precio su precio de alquiler
     */
    constructor(protected nombre: string, protected duracionTotal: number, protected ano: number, protected precio: number) {

    }

    /**
     * Es el getter del nombre
     * @return retorna el nombre del titulo
     */
    getNombre(): string {
        return this.nombre;
    }

    /**
     * Es el getter de la duracion
     * @return retorna la duracion total del titulo
     */
    getDuracion(): number {
        return this.duracionTotal;
    }

    /**
     * Es el getter del año
     * @return retorna el año de salida del titulo
     */
    getAno(): number {
        return this.ano;
    }

    /**
     * Es el getter del precio
     * @return retorna el precio de alquilar el tiulo
     */
    getPrecio(): number {
        return this.precio;
    }
}