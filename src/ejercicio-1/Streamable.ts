import {Titulo} from './Titulo';

/**
 * This is a simple interface
 */
export interface Streamable {
    /**
     * Metodo que devuelve el titulo por fecha
     * @param fecha fecha del titulo que se busca
     * @return retorna un objeto que es el titulo buscado
     */
    busquedaPorAno(fecha:number): Titulo[];
    /**
     * Metodo que devuelve el titulo por su nombre
     * @param nombre nombre del titulo que se busca
     * @return retorna un objeto que es el titulo buscado
     */
    busquedaPorNombre(nombre: string) : Titulo[];
    /**
     * Añade un titulo a la coleccion
     * @param nuevoTitulo se le pasa un objeto de una de las clases derivadas de Titulo para que lo añada a la coleccion
     */
    anadirTitulo(nuevoTitulo: Titulo): void;
    /**
     * Elimina un titulo de la coleccion
     * @param TituloAretirar se le pasa el titulo que se quiere eliminar 
     */
    retirarTitulo(TituloAretirar: Titulo): void;
}