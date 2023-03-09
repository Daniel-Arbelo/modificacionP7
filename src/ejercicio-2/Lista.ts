export class Lista<T>{
    private lista: T[];

    constructor(...lista:T[]){
        this.lista = lista;
    }

    getlista():T[]{
        return this.lista;
    }

    push(item:T){
        this.lista.push(item);
    }

    lenghth():number{
        let sol:number = 0;
        for(let elemento of this.lista){
            sol ++;
        }
        return sol;
    }

    append(lista2:Lista<T>){
        for(let i = 0; i < lista2.lenghth(); i++){
            this.push(lista2[i]);
        }
    }
    
    static concatenate<T>(...listas:Lista<T>[]):Lista<T>{
        let sol = new Lista<T>();
        for(let lista of listas){
            sol.append(lista);
        }
        return sol;
    }

    filter(funcion:(item:T) => boolean):Lista<T>{
        let sol:Lista<T> = new Lista<T>();
        for(let elemento of this.lista){
            if(funcion(elemento) == true){
                sol.push(elemento);
            }
        }
        return sol;
    }

    map(transformar:(item:T)=> T):Lista<T>{
        let sol:Lista<T> = new Lista<T>();
        for(let elemento of this.lista){
            sol.push(transformar(elemento));
        }
        return sol;
    }

    reduce(trnasformar:(acumulador:T, item:T) => T, valorInicial:T):T{
        let sol:T = valorInicial;
        for(let elemento of this.lista){
            sol = trnasformar(sol, elemento);
        }
        return sol;
    }
    


    reverse():Lista<T>{
        let sol = new Lista<T>();
        for(let i = (this.lenghth() - 1); i >=0; i--){
            sol.push(this.lista[i]);
        }
        return sol;
    }

    forEach(accion:(item:T) => void):void{
        for(let elemento of this.lista){
            accion(elemento);
        }
    }
}

console.log("aaa");