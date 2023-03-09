import {Titulo} from './Titulo';
import {Streamable} from './Streamable';

/**
 * This is an abstract class that implements the interface
 */
export abstract class BasicStreamableCollection implements Streamable{
    /**
     * El constructor inicializa los parametos de la clase cuando se crea un objeto
     * @param conjuntoTitulos es el array de Titulos que contie los titulos
     */
    constructor(protected conjuntoTitulos: Titulo[]) {

    }

    /**
     * Metodo que devuelve el titulo por fecha
     * @param fecha fecha del titulo que se busca
     * @return retorna un objeto que es el titulo buscado
     */
    abstract busquedaPorAno(fecha:number): Titulo[];
    
    /**
     * Metodo que devuelve el titulo por su nombre
     * @param nombre nombre del titulo que se busca
     * @return retorna un objeto que es el titulo buscado
     */
    abstract busquedaPorNombre(nombre: string): Titulo[];

    /**
     * Añade un titulo a la coleccion
     * @param nuevoTitulo se le pasa un objeto de una de las clases derivadas de Titulo para que lo añada a la coleccion
     */
    anadirTitulo(nuevoTitulo: Titulo){
        this.conjuntoTitulos.push(nuevoTitulo);
    }

    /**
     * Elimina un titulo de la coleccion
     * @param TituloAretirar se le pasa el titulo que se quiere eliminar 
     */
    retirarTitulo(TituloAretirar: Titulo) {
        let sol:Titulo[] = [];
        this.conjuntoTitulos.forEach((titulo) => {
            if(titulo !== TituloAretirar){
                sol.push(titulo);
            }
        });
        this.conjuntoTitulos = sol;
    }

}
