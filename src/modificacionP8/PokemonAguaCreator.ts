import { Pokemon } from "./Pokemon";
import { PokemonCreator } from "./PokemonCreator";
import { PokemonAgua } from "./PokemonAgua";

export class PokemonAguaCreator extends PokemonCreator {
    /**
     * Constructor de la clase PokemonAguaCreator
     * @param nombre nombre del pokemon de agua que se quiere instanciar
     * @param ataque ataque del pokemon de agua que se quiere instanciar
     * @param defensa defensa del pokemon de agua que se quiere instanciar
     */
    constructor(private nombre:string, private ataque:number, private defensa:number){
        super();
    }

    /**
     * Método que permite realizar la instancia del pokemon de agua que implementa la interfaz Pokemon
     * @returns instancia de la clase PokemonAgua
     */
    public factoryMethod(): Pokemon {
        return new PokemonAgua(this.nombre, this.ataque, this.defensa);
    }
}