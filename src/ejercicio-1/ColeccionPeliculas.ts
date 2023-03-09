import {Titulo} from './Titulo';
import {BasicStreamableCollection} from './BasicStreamableCollection';

/**
 * This is a class that extends another class
 */
export class ColeccionPeliculas extends BasicStreamableCollection {
    /**
     * El constructor inicializa los parametos de la clase cuando se crea un objeto
     * @param conjuntoTitulos es el array de Titulos que contie los titulos
     */
    constructor(protected conjuntoTitulos: Titulo[]){
        super(conjuntoTitulos);
    }

    /**
     * Metodo que devuelve el titulo por fecha
     * @param fecha fecha del titulo que se busca
     * @return retorna un objeto que es el titulo buscado
     */
    busquedaPorAno(fecha:number): Titulo[] {
        let sol:Titulo[] = [];
        this.conjuntoTitulos.forEach((titulo) => {
            if(titulo.getAno() == fecha){
                sol.push(titulo);
            }
        });
        console.table(sol,  ["nombre", "duracion", "ano", "precio", "director"]);
        return sol;
    }

    /**
     * Metodo que devuelve el titulo por su nombre
     * @param nombre nombre del titulo que se busca
     * @return retorna un objeto que es el titulo buscado
     */
    busquedaPorNombre(nombre: string): Titulo[] {
        let sol:Titulo[] = [];
        this.conjuntoTitulos.forEach((titulo) => {
            if(titulo.getNombre() == nombre){
                sol.push(titulo);
            }
        });
        console.table(sol,  ["nombre", "duracion", "ano", "precio", "director"]);
        return sol;
    }
    

}
