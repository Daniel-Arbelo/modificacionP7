import { Pokemon } from "./Pokemon";

export class PokemonAgua implements Pokemon {
    /**
     * Constructor de la calse Pokemon agua
     * @param nombre nombre del pokemon de agua
     * @param ataque ataque del pokemon de agua
     * @param defensa defensa del pokemon de agua
     */
    constructor(private nombre:string, private ataque:number, private defensa:number){

    }

    /**
     * Getter del nombre del pokemon
     * @returns retorna el nombre
     */
    getNombre(): string {
        return this.nombre;
    }

    /**
     * getter del ataque del pokemon
     * @returns ataque del pokemon de agua
     */
    getAtaque(): number {
        return this.ataque;
    }

    /**
     * getter de la defensa del pokemon
     * @returns defensa del pokemon de agua
     */
    getDefensa():number {
        return this.defensa;
    }

    /**
     * getter del grito de batalla del pokemon
     * @returns un string con el grito de batalla del pokemon de agua
     */
    gritoDeBatalla() {
        return "Lanzando chorro de agua!!!";
    }
}
