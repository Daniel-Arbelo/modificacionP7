import { Pokemon } from "./Pokemon";
import { PokemonCreator } from "./PokemonCreator";
import { PokemonTierra } from "./PokemonTierra";

export class PokemonTierraCreator extends PokemonCreator {
    /**
     * Constructor de la clase PokemonTierraCreator
     * @param nombre nombre del pokemon de tierra que se quiere instanciar
     * @param ataque ataque del pokemon de tierra que se quiere instanciar
     * @param defensa defensa del pokemon de tierra que se quiere instanciar
     */
    constructor(private nombre:string, private ataque:number, private defensa:number){
        super();
    }

    /**
     * Método que permite realizar la instancia del pokemon de tierra que implementa la interfaz Pokemon
     * @returns instancia de la clase PokemonTierra
     */
    public factoryMethod(): Pokemon {
        return new PokemonTierra(this.nombre, this.ataque, this.defensa);
    }
}