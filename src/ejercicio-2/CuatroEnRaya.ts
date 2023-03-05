import * as readline from 'readline';



export class Cuatroenraya{
    /**
     * Tablero del 4 en raya
     */
    private maya:number[][];

    /**
     * Constructor del objeto Cuatroenraya. Inicializa el tablero a 0 con las medidas
     */
    constructor(){
        this.maya = [[0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0]];
    }

    /**
     * Funcion que recorre el tablero para saber si quedan huecos
     * @returns retorna true si quedan huecos y false si no
     */
    quedaHueco():boolean{
        for(let i = 0; i < 6; i++){
            for(let j = 0; j < 7; j++){
                if(this.maya[i][j] == 0){
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Funcion que imprime el tablero para que los jugadores tomen sus decisiones en funcion a esto
     */
    imptimirTablero():void{
        let imprimirFila:string = "";
        for(let i = 0; i < 6; i++){
            for(let j = 0; j < 7; j++){
                if(this.maya[i][j] == 1){
                    imprimirFila = imprimirFila + "O";
                }
                else if(this.maya[i][j] == 2){
                    imprimirFila = imprimirFila + "X";
                }
                else{
                    imprimirFila = imprimirFila + ".";
                }
            }
            console.log(imprimirFila);
            imprimirFila = "";
        }
    }

    /**
     * Funcion para saber si se puede colocar una ficha
     * @param columna columna donde se pretende colocar una ficha
     * @returns retorna la posicion de la fila en la columana donde se colocaría la ficha, si es -1 está llena
     */
    colocarFicha(columna:number):number {
        for(let i = 0; i < 6; i++){
            if(!((i+1) > 5)){      
                if(this.maya[i][columna] == 0 && this.maya[i+1][columna] != 0){
                    return i;
                }
                else{
                    if(this.maya[i][columna] == 0) {
                        return i;
                    }
                }
            }
        }
        return -1;
    }

    /**
     * Funion para ver si la columna está llena
     * @param columna columna que se quiere comprobar
     * @returns retorna true si la pos más arriba de la columna tine otro valor distinto a 0, si no false
     */
    columnaAtope(columna:number):boolean{
        if(this.maya[0][columna] != 0){
            console.log("Columna llena, coloque la ficha en otra col");
            return true
        }
        return false;
    }

    /**
     * Función para saber si ya hay 4 en raya
     * @param fila fila donde pone el jugador la ficha
     * @param columna columna donde pone el jugador la ficha
     * @param jugador jugador que coloca la ficha
     * @returns retorna true si esa ficha introducida genera 4 en raya y false si no
     */
    comprobarSiHay4(fila:number, columna:number, jugador:number):boolean{
        // Vertical
        let encontrado:boolean = false;
        let total:number = 0;
        for(let i = 0; i < 6; i ++){
            if(encontrado){
                if(this.maya[i][columna] == jugador){
                    total ++;
                }
                else{
                    encontrado = false;
                    total = 0;
                }
            }
            if(this.maya[i][columna] == jugador && !encontrado){
                encontrado = true;
                total++;
            }
            if(total == 4){
                console.log("El jugador" + jugador + " ha ganado.");
                return true;
            }
        }

        // Horizontal
        encontrado = false;
        total = 0;
        for(let j = 0; j < 7; j ++){
            if(encontrado){
                if(this.maya[fila][j] == jugador){
                    total ++;
                }
                else{
                    encontrado =false;
                    total = 0;
                }
            }
            if(this.maya[fila][j] == jugador && !encontrado){
                encontrado = true;
                total ++;
            }
            if(total == 4){
                console.log("El jugador" + jugador + " ha ganado.");
                return true;
            }
        }

        // Diagonal
    }

    /**
     * Funcion para empezar a jugar por consola, imprimiendo el tablero, tomando por consola la entrada de las fichas de cada jugador y comprobando cuando hay 4 en raya
     */
    start(){
        let turnojugador:number = 1;
        let ultimojugador:number = 0;
        
        do{
            let colocarColumnaString:string;
            let colocarColumna:number = -1;
            let columnaTope:boolean = true;
            if(ultimojugador == 1){
                turnojugador = 2;
            }else{
                turnojugador = 1;
            }

            do{
                console.log("Turno deel jugador " + turnojugador + ". Elija una casilla del 1 al 7:");
                let interfazCaptura = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                
                });
                interfazCaptura.question("introduzca ",answer =>{
                    colocarColumnaString = answer;
                    interfazCaptura.close();
                });
                colocarColumna = Number(colocarColumnaString); 
                colocarColumna--;
                columnaTope = this.columnaAtope(colocarColumna);
            }while((colocarColumna < 0 || colocarColumna > 6) );

            let colocarFila:number = this.colocarFicha(colocarColumna);
            this.maya[colocarFila][colocarColumna] = turnojugador;
            this.imptimirTablero();

            // Revisar si hay 4 en raya
            if(this.comprobarSiHay4(colocarFila, colocarColumna,turnojugador)){
                break;
            }

            ultimojugador = turnojugador;
            turnojugador ++;
        }
        while(this.quedaHueco());

    }
}

//let m:string[][] = [[0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0]];
//console.log(m);
let m:Cuatroenraya = new Cuatroenraya();
m.start();

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

interfazCaptura.question("Prueba ",answer =>{
    console.log(answer);
    interfazCaptura.close();
});