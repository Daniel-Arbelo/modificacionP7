export class Lista<T>{

    private lista: T[];

    /**
     * Constructor de la clase Lista
     * @param lista elementos genericos con los que se inicializa el atributo
     */
    constructor(...lista:T[]){
        this.lista = lista;
    }

    /**
     * getter del atributo lista
     * @returns retorna la lista de elementos de la clase
     */
    getlista():T[]{
        return this.lista;
    }

    /**
     * Funcion que sirve para hacer un push de un elemento
     */
    push(item:T){
        this.lista.push(item);
    }

    /**
     * Funcion que retorna el tamaño de la lista
     * @returns el tamño de la lista
     */
    lenghth():number{
        let sol:number = 0;
        for(let elemento of this.lista){
            sol ++;
        }
        return sol;
    }

    /**
     * Funcion que une dos listas una consecutiva a otra
     * @param lista2 lista a unir con con la de la clase a la que se le pasa
     */
    append(lista2:Lista<T>){
        for(let i = 0; i < lista2.lenghth(); i++){
            this.push(lista2.getlista()[i]);
        }
    }
    
    /**
     * Método estático que pasandole listas las concatena
     * @param listas numero variable de listas a concatenar
     * @returns retorna una nueva lista resultado de la concatenación de las pasadas
     */
    static concatenate<T>(...listas:Lista<T>[]):Lista<T>{
        let sol = new Lista<T>();
        for(let lista of listas){
            sol.append(lista);
        }
        return sol;
    }

    /**
     * Filtra la lista usando una funcion pasada 
     * @param funcion predicado lógico que tiene que cumplir el filtrad
     * @returns retorna una lista con los elementos que pasen el predicado lógico
     */
    filter(funcion:(item:T) => boolean):Lista<T>{
        let sol:Lista<T> = new Lista<T>();
        for(let elemento of this.lista){
            if(funcion(elemento) == true){
                sol.push(elemento);
            }
        }
        return sol;
    }

    /**
     * Funcion que aplica la funcion dad a cada elemento de la lista 
     * @param transformar funcion a ser aplicada a cada elemento de la lista
     * @returns retorna una nueva lista resultado de haber pasado por la funcion
     */
    map(transformar:(item:T)=> T):Lista<T>{
        let sol:Lista<T> = new Lista<T>();
        for(let elemento of this.lista){
            sol.push(transformar(elemento));
        }
        return sol;
    }

    /**
     * funcion que pasandole una funcion con un un acumulador inicial reduce cada elemento utilizando la funcion pasada
     * @param trnasformar funcion con la que se reduce cada elemento 
     * @param valorInicial valor inicial que tendrá el acumulador
     * @returns retorna el valor de aplicar la funcion pasada a la lista con el valor inicial del acumulador
     */
    reduce(trnasformar:(acumulador:T, item:T) => T, valorInicial:T):T{
        let sol:T = valorInicial;
        for(let elemento of this.lista){
            sol = trnasformar(sol, elemento);
        }
        return sol;
    }
    

    /**
     * Funcion que devuelve la lista con los valores originales pero valores inversos
     * @returns retorna la nueva lista con los valores inversos.
     */
    reverse():Lista<T>{
        let sol = new Lista<T>();
        for(let i = (this.lenghth() - 1); i >=0; i--){
            sol.push(this.lista[i]);
        }
        return sol;
    }

    /**
     * Funcion que itera en los elemntos de la lista invocando la funcion pasada sobre ellos
     * @param accion funcion a implementar sobre casda elemento de la lista.
     */
    forEach(accion:(item:T) => void):void{
        for(let elemento of this.lista){
            accion(elemento);
        }
    }
}
