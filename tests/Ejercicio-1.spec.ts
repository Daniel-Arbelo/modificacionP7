import { expect } from "chai";
import "mocha";
import {Artista} from "../src/ejercicio-1/Artista";
import {Discografia} from "../src/ejercicio-1/Discografia";
import {Cancion} from "../src/ejercicio-1/Cancion";
import { BibliotecaMusical } from "../src/ejercicio-1/BibliotecaMusical";

//cacniones de quevedo disco: donde quiero estar
let playaDelIngles:Cancion = new Cancion("Playa del inglés", 3.58, "Reggaeton", false, 97708730);
let puntoG:Cancion = new Cancion("Punto G", 2.32, "Reggaeton", false, 201335538);
let vistaAlMar:Cancion = new Cancion("Vista al mar",3.01, "Reggaeton", false, 245131400);

// Disco donde quiero estar
let dondeQuieroEstar:Discografia = new Discografia("Donde quiero estar",2023, [playaDelIngles, puntoG, vistaAlMar]);

// Artista Quevedo
let quevedo:Artista = new Artista("Quevedo", 35000, [dondeQuieroEstar]);

// biblioteca con todos los artistas
let biblioteca:BibliotecaMusical = new BibliotecaMusical([quevedo]);

describe(" Ejercicio 1 - Biblioteca musical", () =>{
    it("Si hacemos un busqueda por artista de Quevedo tiene que devolver [ { nombre: 'Quevedo', oyentes: 35000, numeroDeDiscos: 1 } ]",() =>{
        expect(biblioteca.buscarPorArtista("Quevedo")).to.be.eqls([ { nombre: 'Quevedo', oyentes: 35000, numeroDeDiscos: 1 } ]);
    });
    
    it("Si hacemos un busqueda por cancion de Playa del inglés tiene que devolver la información formateada de las canciones con ese nombre",() =>{
        expect(biblioteca.buscarPorCancion("Playa del inglés")).to.be.eqls([
            {
              nombreArtista: 'Quevedo',
              nombreDisco: 'Donde quiero estar',
              nombreCancion: 'Playa del inglés',
              duracion: 3.58,
              generos: 'Reggaeton',
              single: false,
              reproducciones: 97708730
            }
          ]);
    });
    
    it("Si hacemos un busqueda por cancion de Playa del inglés tiene que devolver la información formateada de las canciones con ese nombre",() =>{
        expect(biblioteca.buscarPorCancion("Playa del inglés")).to.be.eqls([
            {
              nombreArtista: 'Quevedo',
              nombreDisco: 'Donde quiero estar',
              nombreCancion: 'Playa del inglés',
              duracion: 3.58,
              generos: 'Reggaeton',
              single: false,
              reproducciones: 97708730
            }
          ]);
    });
    it("Si hacemos un busqueda por Discografía de Donde quiero estar tiene que devolver la información formateada de los discos con ese nombre",() =>{
        expect(biblioteca.buscarPorDiscografia("Donde quiero estar")).to.be.eqls([
            {
              nombreArtista: 'Quevedo',
              nombreDisco: 'Donde quiero estar',
              ano: 2023,
              numeroCanciones: 3,
              duracion: 8.91,
              reproducciones: 544175668
            }
          ]);
    });
    
});

