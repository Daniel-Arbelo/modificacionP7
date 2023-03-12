import {Cancion} from "./Cancion";

export class Disco{
    /**
     * Constructor de la clase Discografia representa un disco
     * @param nombre nombre del disco
     * @param ano año que salió el disco
     * @param canciones Canciones que contiene el disco
     */
    constructor(public nombre:string, public ano:number, public canciones:Cancion[] = []){

    }

    /**
     * Funcion que permite añadir una cancion al disco
     * @param cancion objeto de la clase cancion que se quiere añadir
     */
    addCancion(cancion:Cancion){
        this.canciones.push(cancion);
    }

    /**
     * Funcion que da el numero de canciones del disco
     * @returns retorna el tamaño del array de canciones
     */
    getNumeroCanciones(){
        return this.canciones.length;
    }

    /**
     * Getter de la duracion del disco
     * @returns retorna la suma de la duracion de todas las canciones que componen el objeto
     */
    getDuracion(){
        return this.canciones.reduce((acumulador, cancion) => acumulador + cancion.duracion, 0);
    }

    /**
     * Getter del numero de reproducciones del disco
     * @returns retorna la suma del numero de reproducciones de todas las canciones
     */
    getNumeroReproducciones(){
        return this.canciones.reduce((acumulador, cancion) => acumulador + cancion.numeroReproducciones, 0);
    }

    /**
     * Getter de las canciones formateadas en un objeto
     * @returns retorna un objeto con la información de las canciones
     */
    getListaDeCanciones(){
        return this.canciones.map((cancion) => ({
            nombre:cancion.nombre,
            duracion: cancion.duracion,
            generos: cancion.genero,
            single: cancion.single,
            reproducciones:cancion.numeroReproducciones,
        }));
    }
}
