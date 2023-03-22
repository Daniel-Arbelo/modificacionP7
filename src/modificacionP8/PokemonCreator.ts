import { Pokemon } from "./Pokemon";

export abstract class PokemonCreator {
    /**
     * Métod abstracto que sirve para implementar clases que tengan la implementada la interfaz pokemon
     */
    public abstract factoryMethod():Pokemon;

    /**
     * Metodo que llama al factory method para que haga una instancia de la clase
     * @returns retorna la información de la clase instanciada en frmato de string
     */
    public logic():string {
        const pokemon = this.factoryMethod();
        return 'Soy ' + pokemon.getNombre() +
                ' Mi ataque es de ' + pokemon.getAtaque() +
                ' Y mi defensa de ' + pokemon.getDefensa();
    }
}