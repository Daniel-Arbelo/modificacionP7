import {PrintableCollection} from "./PrintableCollection";

export class NumericPrintableCollection extends PrintableCollection<number>{
    /**
     * Constructor de la clase NumericPrintableCollection
     * @param items coleccion de numberos que almacena la clase
     */
    constructor(protected items:number[]){
        super(items);
    }

    /**
     * Funcion que imprime por pantalla la lista de numeros separados por comas
     */
    print(): void {
        let sol:string = "";
        this.items.forEach((item) => {
            sol += item + ",";
        });
        
        console.log(sol);
    }
}