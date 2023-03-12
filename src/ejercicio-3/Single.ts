import {Cancion} from "./Cancion";

export class Single {
    /**
     * Constructor de la clase Single
     * @param nombre nombre del single
     * @param ano año del single
     * @param cancion unica cancion del single
     */
    constructor(private nombre:string, private ano:number, private cancion:Cancion){

    }

    /**
     * Getter del nombre
     * @returns el nombre del single
     */
    getNombre(){
        return this.nombre;
    }

    /**
     * getter del año
     * @returns retorna el año del single
     */
    getAno(){
        return this.ano;
    }

    /**
     * Getter de la cancion
     * @returns retorna la unica cancion que compone el single
     */
    getCancion(){
        return this.cancion;
    }
}