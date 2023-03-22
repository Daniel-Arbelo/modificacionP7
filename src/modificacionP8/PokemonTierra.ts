import { Pokemon } from "./Pokemon";

export class PokemonTierra implements Pokemon {
    /**
     * Constructor de la calse Pokemon tierra
     * @param nombre nombre del pokemon de tierra
     * @param ataque ataque del pokemon de tierra
     * @param defensa defensa del pokemon de tierra
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
     * @returns ataque del pokemon de tierra
     */
    getAtaque(): number {
        return this.ataque;
    }

    /**
     * getter de la defensa del pokemon
     * @returns defensa del pokemon de tierra
     */
    getDefensa():number {
        return this.defensa;
    }

    /**
     * getter del grito de batalla del pokemon
     * @returns un string con el grito de batalla del pokemon de tierra
     */
    gritoDeBatalla() {
        return "Lanzando rocaa!!!";
    }
}
