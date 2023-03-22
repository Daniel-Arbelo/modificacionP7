import { Pokemon } from "./Pokemon";
import { PokemonCreator } from "./PokemonCreator";
import { PokemonFuego } from "./PokemonFuego";

export class PokemonFuegoCreator extends PokemonCreator {
    /**
     * Constructor de la clase PokemonFuegoCreator
     * @param nombre nombre del pokemon de fuego que se quiere instanciar
     * @param ataque ataque del pokemon de fuego que se quiere instanciar
     * @param defensa defensa del pokemon de fuego que se quiere instanciar
     */
    constructor(private nombre:string, private ataque:number, private defensa:number){
        super();
    }

    /**
     * Método que permite realizar la instancia del pokemon de fuego que implementa la interfaz Pokemon
     * @returns instancia de la clase PokemonFuego
     */
    public factoryMethod(): Pokemon {
        return new PokemonFuego(this.nombre, this.ataque, this.defensa);
    }
}