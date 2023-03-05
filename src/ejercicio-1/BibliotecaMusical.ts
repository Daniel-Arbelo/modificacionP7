import {Artista} from "./Artista";
import {Discografia} from "./Discografia";

export class BibliotecaMusical{
    /**
     * Constructor de la biblioteca musical
     * @param artistas lista de artistas que componen la biblioteca
     */
    constructor(public artistas:Artista[] = []){
        
    }

    /**
     * Funcion que permite añadir artistas una vez creado el objeto
     * @param artista artista  a ser añadido
     */
    addArtista(artista:Artista){
        this.artistas.push(artista);
    }

    /**
     * Funcion para buscar artistas por su nombre
     * @param nombre nombre del artista que se quiere encontrar
     * @returns retorna un objeto con los artistas que tienen ese nombre.
     */
    buscarPorArtista(nombre:string){
        const resultado = this.artistas.filter((artista) => 
            artista.nombre.toLocaleLowerCase().includes(nombre.toLocaleLowerCase())
        );

        return resultado.map((artista) => ({
            nombre: artista.nombre,
            oyentes:artista.numeroOyentes,
            numeroDeDiscos: artista.discografia.length,
        }));
    }

    /**
     * Función que permite buscar disco por el nombre
     * @param nombre nombre de disco a buscar
     * @returns retorna un objeto con los discos del objeto discografía que tienen ese nombre. 
     */
    buscarPorDiscografia(nombre:string){
        const resultado = this.artistas
        .flatMap((artist) => artist.discografia.map((disco) => ({ artist, disco })))
        .filter(
            ({ disco }) => disco.nombre.toLowerCase().includes(nombre.toLowerCase())
        );
        
        return resultado.map(({artist,disco}) => ({
            nombreArtista: artist.nombre,
            nombreDisco: disco.nombre,
            ano: disco.ano,
            numeroCanciones: disco.getNumeroCanciones(),
            duracion: disco.getDuracion(),
            reproducciones: disco.getNumeroReproducciones(),
        }));

    }

    /**
     * Funion que permite buscar canciones por su nombre entre las canciones de todos los artistas
     * @param nombre nombre de la cancion a buscar
     * @returns retorna las canciones que tienen el nombre pasado
     */
    buscarPorCancion(nombre:string){
        const resultado = this.artistas
        .flatMap((artist) =>
            artist.discografia.flatMap((disco) =>
                disco.getListaDeCanciones().map((cancion) => ({ artist, disco, cancion }))
            )
        )
        .filter(({ cancion }) =>
            cancion.nombre.toLowerCase().includes(nombre.toLowerCase())
        );

        return resultado.map(({artist,disco,cancion}) =>({
            nombreArtista: artist.nombre,
            nombreDisco: disco.nombre,
            nombreCancion: cancion.nombre,
            duracion:cancion.duracion,
            generos: cancion.generos,
            single: cancion.single,
            reproducciones: cancion.reproducciones,

        }));
    }

    /**
     * Funcion que imprime por pantalla en forma de tabla el objeto pasado
     * @param datos array de objetos que contienen la información a imprimir en formato tabla.
     */
    imprimirTabla(datos: object[]){
        console.table(datos);
    }
}