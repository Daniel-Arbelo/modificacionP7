import {Collectable} from "./Collectable";
import {Printable} from "./Printable";

export abstract class PrintableCollection<T> implements Collectable<T>, Printable{
    /**
     * Constructor de la clase PrintableCollection
     * @param items array de items del tipo generico
     */
    constructor(protected items:T[]){
        
    }
    /**
     * Funcion que añade un item a la coleccion
     * @param newitem item a añadir al atributo dwe la clase
     */
    additem(newitem: T): void {
        this.items.push(newitem);
    }

    /**
     * Retorna el item en la posicion pasasda
     * @param index indice del item que se quiere recuperar
     */
    getitem(index:number){
        return this.items[index];
    }
    
    /**
     * Funcion que retorna el tamaño del atributo para saber cuantos items tiene
     */
    getnumberofitems(): number {
        return this.items.length;
    }

    /**
     * Funcion abstracta que tiene que implementar toda clase que herede de Printable Collection
     */
    abstract print(): void;
    
}
