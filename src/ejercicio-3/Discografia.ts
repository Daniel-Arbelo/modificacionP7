import {Disco} from "./Disco";
import {Single} from "./Single";


export class Discografia<T extends Disco, U extends Single>{
    /**
     * Constructor de la clase discografía
     * @param discografia Conjunto de discos y singles
     */
    constructor(private discografia:(T | U)[]){

    }

    /**
     * getter de la discografía
     * @returns retorna el conjunto de discos y singles
     */
    getDiscografia(){
        return this.discografia;
    }

    /**
     * Metodo para añadir elementos a la clase
     * @param newElement añade un disco o un single, dependiendo de lo que se le pase
     */
    addDiscoSingle(newElement:T | U){
        this.discografia.push(newElement);
    }

    /**
     * Getter del tamaño de la discografía
     * @returns retorna el tamaño del array
     */
    getNumberOfElements(){
        return this.discografia.length;
    }

    /**
     * getter de los elementos
     * @param index posicion del elmento que se quiere sacar
     * @returns reotrna el elemnto en la posicion pasada
     */
    getElement(index:number){
        return this.discografia[index];
    }

}