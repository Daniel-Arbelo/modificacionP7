import {Discografia} from "./Discografia";
import {Single} from "./Single";
import {Disco} from "./Disco";


export class Artista{
    /**
     * Constructor de la clase Artista
     * @param nombre nombre del artista
     * @param numeroOyentes numero de reproducciones que tiene el artista mensualmente
     * @param discografia array con los diferentes discos del artista.
     */
    constructor(public nombre:string, public numeroOyentes:number, public discografia:Discografia<Disco,Single>){

    }
}