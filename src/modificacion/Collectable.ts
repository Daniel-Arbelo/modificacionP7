

export interface Collectable<T>{
    /**
     * Funcion que añade un item a la coleccion
     * @param newitem item a añadir al atributo dwe la clase
     */
    additem(newitem:T):void;
    /**
     * Retorna el item en la posicion pasasda
     * @param index indice del item que se quiere recuperar
     */
    getitem(index:number):T;
    /**
     * Funcion que retorna el numero de items
     */
    getnumberofitems():number;
}