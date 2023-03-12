import {Artista} from "./Artista";
import {Disco} from "./Disco";
import {Single} from "./Single";
import {Cancion} from "./Cancion";


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
            numeroDeDiscos: artista.discografia.getNumberOfElements(),
        }));
    }

    /**
     * Función que permite buscar disco por el nombre
     * @param nombre nombre de disco a buscar
     * @returns retorna un objeto con los discos del objeto discografía que tienen ese nombre. 
     */
    buscarPorDiscografia(nombre:string){
        let resultado:(Disco | Single)[]= [];
        this.artistas
        .forEach((artist) => {
            for(let i = 0; i < artist.discografia.getNumberOfElements(); i++){
                const myElement = artist.discografia.getElement(i);
                if(myElement instanceof Disco){
                    if(myElement.nombre == nombre)
                        resultado.push(myElement);
                }else if(myElement instanceof Single){
                    if(myElement.getNombre() == nombre)
                        resultado.push(myElement);
                }
            }
        })

        return resultado.map((elemento) => ({
            nombre: (elemento instanceof Disco? elemento.nombre: elemento.getNombre()),
            ano : (elemento instanceof Disco? elemento.ano: elemento.getAno()),
            numeroCanciones: (elemento instanceof Disco? elemento.getNumeroCanciones(): 1),
            duracion: (elemento instanceof Disco? elemento.getDuracion(): elemento.getCancion().duracion),
            reproducciones: (elemento instanceof Disco? elemento.getNumeroReproducciones(): elemento.getCancion().numeroReproducciones),
        }));
      
    }

    /**
     * Funion que permite buscar canciones por su nombre entre las canciones de todos los artistas
     * @param nombre nombre de la cancion a buscar
     * @returns retorna las canciones que tienen el nombre pasado
     */
    buscarPorCancion(nombre:string){
        let resultado:(Cancion)[]= [];
        this.artistas
        .forEach((artist) => {
            for(let i = 0; i < artist.discografia.getNumberOfElements(); i++){
                const myElement = artist.discografia.getElement(i);
                if(myElement instanceof Disco){
                    myElement.canciones.forEach(element => {
                        if(element.nombre == nombre){
                            resultado.push(element);
                        }
                    });
                }else if(myElement instanceof Single){
                    if(myElement.getCancion().nombre == nombre){
                        resultado.push(myElement.getCancion());
                    }
                }
            }
        })
        return resultado.map((cancion) =>({
            nombreCancion: cancion.nombre,
            duracion:cancion.duracion,
            generos: cancion.genero,
            single: cancion.single,
            reproducciones: cancion.numeroReproducciones,

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