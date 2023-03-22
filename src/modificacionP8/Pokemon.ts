export interface Pokemon {
    /**
     * Getter del nombre del pokemon
     */
    getNombre():string;
    /**
     * getter del ataque del pokemon
     */
    getAtaque():number;
    /**
     * getter de la defensa del pokemon
     */
    getDefensa():number;
    /**
     * getter del grito de batalla del pokemon
     */
    gritoDeBatalla():string;
}