import {Discografia} from "./Discografia";

export class Artista{
    /**
     * Constructor de la clase Artista
     * @param nombre nombre del artista
     * @param numeroOyentes numero de reproducciones que tiene el artista mensualmente
     * @param discografia array con los diferentes discos del artista.
     */
    constructor(public nombre:string, public numeroOyentes:number, public discografia:Discografia[]){

    }
}