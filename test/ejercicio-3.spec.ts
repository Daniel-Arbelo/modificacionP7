import { expect } from "chai";
import "mocha";
import {Artista} from "../src/ejercicio-3/Artista";
import {Discografia} from "../src/ejercicio-3/Discografia";
import {Disco} from "../src/ejercicio-3/Disco";
import {Single} from "../src/ejercicio-3/Single";
import {Cancion} from "../src/ejercicio-3/Cancion";
import { BibliotecaMusical } from "../src/ejercicio-3/BibliotecaMusical";

//cacniones de quevedo disco: donde quiero estar
let playaDelIngles:Cancion = new Cancion("Playa del inglés", 3.58, "Reggaeton", false, 97708730);
let puntoG:Cancion = new Cancion("Punto G", 2.32, "Reggaeton", false, 201335538);
let vistaAlMar:Cancion = new Cancion("Vista al mar",3.01, "Reggaeton", false, 245131400);
let musicSession52:Cancion = new Cancion("BZRP Music Session #52",3.18,"Hip-Hop", true, 1095558641);

// Disco donde quiero estar
let dondeQuieroEstar:Disco = new Disco("Donde quiero estar",2023, [playaDelIngles, puntoG, vistaAlMar]);

// Single
let singleConBizarap:Single = new Single("Qevedo ft BZRP", 2022, musicSession52);

// Discografía
let discografiaQevedo:Discografia<Disco,Single> = new Discografia<Disco, Single>([dondeQuieroEstar, singleConBizarap]);

// Artista Quevedo
let quevedo:Artista = new Artista("Quevedo", 35000, discografiaQevedo);

// biblioteca con todos los artistas
let biblioteca:BibliotecaMusical = new BibliotecaMusical([quevedo]);

describe(" Ejercicio 3 - Biblioteca musical", () =>{
    it("Si hacemos un busqueda por artista de Quevedo tiene que devolver [ { nombre: 'Quevedo', oyentes: 35000, numeroDeDiscos: 2 } ]",() =>{
        expect(biblioteca.buscarPorArtista("Quevedo")).to.be.eqls([ { nombre: 'Quevedo', oyentes: 35000, numeroDeDiscos: 2 } ]);
    });
    
    it("Si hacemos un busqueda por cancion de Playa del inglés tiene que devolver la información formateada de las canciones con ese nombre",() =>{
        expect(biblioteca.buscarPorCancion("Playa del inglés")).to.be.eqls([
            {
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
              nombre: 'Donde quiero estar',
              ano: 2023,
              numeroCanciones: 3,
              duracion: 8.91,
              reproducciones: 544175668
            }
          ]);
    });

    describe('Clase Single', () => {
        it("Si haceos un getter del año del single con bizzarap tiene que dar 2022",() =>{
            expect(singleConBizarap.getAno()).to.be.eqls(2022);
        });
        it("Si haceos un getter del nombre del single con bizzarap tiene que dar Qevedo ft BZRP",() =>{
            expect(singleConBizarap.getNombre()).to.be.eqls("Qevedo ft BZRP");
        });
    });
    describe('Clase Discografia', () => {
        it("La discografía tiene un total de 2 elemntos",() =>{
            expect(discografiaQevedo.getNumberOfElements()).to.be.eqls(2);
        });
        
    });
});