import {Artista} from "./Artista";
import {Discografia} from "./Discografia";
import {Cancion} from "./Cancion";
import { BibliotecaMusical } from "./BibliotecaMusical";

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

console.log(biblioteca.buscarPorArtista("Quevedo"));
biblioteca.imprimirTabla(biblioteca.buscarPorArtista("Quevedo"));
console.log(biblioteca.buscarPorCancion("Playa del inglés"));
console.log(biblioteca.buscarPorDiscografia("Donde quiero estar"));

