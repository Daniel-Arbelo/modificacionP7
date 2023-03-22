import { Pokemon } from "./Pokemon";

export class PokemonFuego implements Pokemon {
    /**
     * Constructor de la calse Pokemon Fuego
     * @param nombre nombre del pokemon de fuego
     * @param ataque ataque del pokemon de fuego
     * @param defensa defensa del pokemon de fuego
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
     * @returns ataque del pokemon de fuego
     */
    getAtaque(): number {
        return this.ataque;
    }

    /**
     * getter de la defensa del pokemon
     * @returns defensa del pokemon de fuego
     */
    getDefensa():number {
        return this.defensa;
    }

    /**
     * getter del grito de batalla del pokemon
     * @returns un string con el grito de batalla del pokemon de fuego
     */
    gritoDeBatalla() {
        return "Lanzando fogonazo!!!";
    }
}
