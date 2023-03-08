import {PrintableCollection} from "./PrintableCollection";

export class StringPrintableCollection extends PrintableCollection<string>{
    /**
     * Constructor de la clase StringPrintableCollection
     * @param items coleccion de strjngs que almacena la clase
     */
    constructor(protected items:string[]){
        super(items);
    }

    /**
     * Funcion que imprime por pantalla la lista de strings separados por comas
     */
    print(): void {
        let sol:string = "";
        this.items.forEach((item) => {
            sol += item + ",";
        });
        
        console.log(sol);
    }
}