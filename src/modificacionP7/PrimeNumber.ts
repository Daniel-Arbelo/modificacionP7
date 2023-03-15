import { isPrimo } from "./isPrimo";

export class PrimeNumber implements Iterable<number>{
    /**
     * Atributo de la clase que almacena los primos
     */
    private numerosPrimos:number[] = [];

    /**
     * Atributo que guarda la única instancia de la clase 
     */
    private static PrimeNumber:PrimeNumber;

    /**
     * Constructor de lal clase PrimeNumber
     * @param n Inicializa su atributo con los n primeros numeros primos
     */
    constructor(n:number){
        let i = 2;
        let numeros = 0;
        while(numeros != n){
            if(isPrimo(i)){
                this.numerosPrimos.push(i);
                numeros ++;
            } 
            i ++;
        }
        
    }

    /**
     * Funcion que pertenece al patron singelton si no se a instanciado la clase, lo hace, si no devuelve las instancia
     * @param n inicializa la clase con los n primeros numeros primos, si ya está instanciada la actualiza
     * @returns retorna la instancia de la clase
     */
    public static getPrimeNumberInstance(n:number):PrimeNumber{
        if(!PrimeNumber.PrimeNumber){
            PrimeNumber.PrimeNumber = new PrimeNumber(n);
        }else{
            PrimeNumber.PrimeNumber.actualizarN(n);
        }
        return PrimeNumber.PrimeNumber;
    }

    /**
     * Getter del atributo de la clase
     * @returns retorna la lista con los n primeros numeros primos inicializados en el constructor
     */
    getPrimos(){
        return PrimeNumber.PrimeNumber.numerosPrimos;
    }

    /**
     * Actualiza la lista de los numeros primos
     * @param n actualiza la lista con los n primeros numeros primos
     */
    actualizarN(n:number){
        this.numerosPrimos = [];
        let i = 2;
        let numeros = 0;
        while(numeros != n){
            if(isPrimo(i)){
                this.numerosPrimos.push(i);
                numeros ++;
            } 
            i ++;
        }
    }

    /**
     * Getter de los primeros numeros primos
     * @param n primeros n numeros primos a devolver
     * @returns retorna un array de los primeros n numeros primos
     */
    getNNumerosPrimos(n:number){
        let sol:number[] = [];
        let i = 2;
        let numeros = 0;
        while(numeros != n){
            if(isPrimo(i)){
                sol.push(i);
                numeros ++;
            } 
            i ++;
        }
        return sol;
    }

    /**
     * Añade un numero primo comprobando primero si lo es
     * @param numero numero primo a añadir
     */
    addPrimeNumber(numero:number){
        if(isPrimo(numero) && numero >= 2){
            PrimeNumber.PrimeNumber.numerosPrimos.push(numero);
        }
    }

    /**
     * getter del elemento en el indice 
     * @param index indice del elemento al que se quiere acceder
     * @returns retorn el elemento en el índice pasado
     */
    getIndex(index:number): number | undefined{
        if(index < 0 || index >= PrimeNumber.PrimeNumber.numerosPrimos.length){
            return undefined;
        }else{
            return PrimeNumber.PrimeNumber.numerosPrimos[index];
        }
    }

    /**
     * Getter del tamño del array de numeros primos
     * @returns retorna la cantidad de numeros primos 
     */
    getLenght(){
        return PrimeNumber.PrimeNumber.numerosPrimos.length;
    }

    /**
     * Funion que retorna los numeros primos entre el rango pasado
     * @param n cota inferior del rango
     * @param m cota superior del rango
     * @returns retorna un array con los numeros primos entre n y m
     */
    getNumerosPrimosInRange(n:number, m:number){
        /*if(n < 2){
            n = 2;
        }
        if(m < n){
            m = n;
        }*/
        let sol:number[] = [];
        for(let i = n; i <= m ; i++){
            if(isPrimo(i)){
                sol.push(i);
            }
        }
        return sol;
    }

    /**
     * Funcion que hay que implementar  para porder  iterar
     * @returns retorna un iterador de atributo de la clase
     */
    [Symbol.iterator](): Iterator<number> {
        return PrimeNumber.PrimeNumber.numerosPrimos.values();
    }
}

