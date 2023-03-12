
export class Cancion{
    /**
     * Constructor de la clase Cancion
     * @param nombre nombre de la canción
     * @param duracion duración de la canción
     * @param genero genero de la canción
     * @param single tue si es un single y false si no
     * @param numeroReproducciones numero de reproducciones de la canción
     */
    constructor(public nombre:string, public duracion:number, public genero:string, public single:boolean, public numeroReproducciones:number){

    }

    
}