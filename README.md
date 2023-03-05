# Práctica 5 - Objetos, clases e interfaces

## Introducción
En está práctica nos piden que resolvamos dos ejercicios haciendo uso de las clases y las interfaces, tendremos que generar la documentación y las pruebas como en las prácticas anteriores, y empezar a mirar la parte de principios solid   el cubrimiento del código con instanbull y coveralls. Cada ejercisio se encontrará en una carpeta con un fichero por cada clase.

## Ejercicio 1 - Biblioteca musical
### Cancion
En primer lugar se crea una clase para poder instanciar canciones. Thedrá los sigientes atributos:

- Nombre
- Duración en segundos
- Géneros
- Single (determina si la canción fue lanzada como un single o no)
- Número de reproducciones

### Discografía
Después se crea una clase para poder almacenar las canciones que será la de Discografía, que contendrá 

- Nombre
- Año de publicación
- Canciones

Donde canciones será un array del objeto canciones. También tendrá una serie de métodos, que son los siguientes:

- addCancion que permite añadir una canción a una discografía ya creada.
- getNumeroCanciones que retorna el tamaño del array de canciones
- getDuracion que retorna la suma de la duracion de todas las canciones
- getNumeroReproducciones que retorna la suma del numero de reproducciones de todas las canciones
- getListaDeCanciones que retorna un objeto con las canciones.

### Artista
Esta clase almacena la informacion de un artista y tiene los siguientes atributos:
- Nombre
- Número de oyentes mensuales
- Discografía

### BibliotecaMusical
Esta es la clase que almacena los artistas y por lo tanto almacena su discografía y canciones.
En primer lugar se crea una funcion que pasandole un objeto, se imprime por pantalla en forma de tabla la información.
```
    imprimirTabla(datos: object[]){
        console.table(datos);
    }
```
Después de esto se crean diferentes funciones para hacer diferentes búsquedas y si le pasamos el resultado a esta funcion lo sacará por pantalla en forma de tabla.
La primera búsqueda será la búsqueda por artistas:
```
buscarPorArtista(nombre:string){
        const resultado = this.artistas.filter((artista) => 
            artista.nombre.toLocaleLowerCase().includes(nombre.toLocaleLowerCase())
        );

        return resultado.map((artista) => ({
            nombre: artista.nombre,
            oyentes:artista.numeroOyentes,
            numeroDeDiscos: artista.discografia.length,
        }));
    }
```
Es bastante sencillo, recorre los artistas filtrando los que tengan el nombre pasado. Después se formatea el resultado y se devuelve.

También se implementa una búsqueda por discografía:

```
buscarPorDiscografia(nombre:string){
        const resultado = this.artistas
        .flatMap((artist) => artist.discografia.map((disco) => ({ artist, disco })))
        .filter(
            ({ disco }) => disco.nombre.toLowerCase().includes(nombre.toLowerCase())
        );
        
        return resultado.map(({artist,disco}) => ({
            nombreArtista: artist.nombre,
            nombreDisco: disco.nombre,
            ano: disco.ano,
            numeroCanciones: disco.getNumeroCanciones(),
            duracion: disco.getDuracion(),
            reproducciones: disco.getNumeroReproducciones(),
        }));

    }
```
Es bastante parecida a la anterior, se accede a la discografía del artista y después se recorrre cada disco para ir filtrandolos por el nombre pasado y pra acabar se retorna un objeto con toda la información.

Y por último se debe poder buscar por cancion:
```
buscarPorCancion(nombre:string){
        const resultado = this.artistas
        .flatMap((artist) =>
            artist.discografia.flatMap((disco) =>
                disco.getListaDeCanciones().map((cancion) => ({ artist, disco, cancion }))
            )
        )
        .filter(({ cancion }) =>
            cancion.nombre.toLowerCase().includes(nombre.toLowerCase())
        );

        return resultado.map(({artist,disco,cancion}) =>({
            nombreArtista: artist.nombre,
            nombreDisco: disco.nombre,
            nombreCancion: cancion.nombre,
            duracion:cancion.duracion,
            generos: cancion.generos,
            single: cancion.single,
            reproducciones: cancion.reproducciones,

        }));
    }
```
Se recorre la discografía de los artistas y dentro de cada discografía se recorren las canciones filtrando las que coincidan con el nombre pasado. Por último se pasa el resultado.


## Ejercicio 2 - Conecta 4

Se almacena el tablero de ajedrez en una matriz de numeros, donde si hay un 0, está vacia la casilla, si hay un 1 es una ficha del jugador1 y si hay un 2 una del juga
dor 2.
```
private maya:number[][];
```
en el constructor de la case se inicializa el tablero todo a 0.
Luego se crean los métodos siguientes:
```
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

```

Este método recorre la matriz y desde que encuetra un hueco, devuelve true, si no encuentra ningun hueco false.

```
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
    
```
El método imprirTabler, recorre el tablero, imprimiendo un punto si está vacía la casilla, una x si si es del jugador 2 y una O si es del jugador 1.
```
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
```
Esta función busca la pos más bja de la columna que se le pasa por parámetros, si no encuentra espacio, devuelve un -1, esto es que está llena la columna, si no 
devuelve la pos de la fila.

```
columnaAtope(columna:number):boolean{
        if(this.maya[0][columna] != 0){
            console.log("Columna llena, coloque la ficha en otra col");
            return true
        }
        return false;
    }
```

Devuelve true si está llen, si no false.

```
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
```
Esta función comprueba si ya se ha conseguido algun 4 en raya, dada la posición de la ficha que se introduce, comprueba si a partir de ella hay algún 4 en raya, esta
comprobación se hace cada vez que se introduce una ficha.

```
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
```

Por último la función start, controla a que jugador le toca para que meta una ficha el jugador 1 primero, después el 2, y así hasta que uno de los dos gane. Primero se 
ve quien va a meter ficha, luego el jugador introduce la columna donde quiere meterla, se comrueba que no esté atope, y si hay espasio, se busca la fila donde estaría, 
ya tenemos la fila y la columna, lo que queda es colocarla, imprimir el tablero resultado de esto y por último comprobar que no se haya conseguido el 4 en raya. Esto 
se hace hasta que uno gane, o hasta que se llene el tablero.

## Conclución 
Esta práctica ha estado bién para familiarizarse con las clases en typescript aunque con un ejercicio hubiera estado bién, ya que al tener que realizar un informe, pruebas, documentación y cada vez se incluyen nuevas herramientas supone demaciado trabajo. Si hubiera sido una práctica más corta se haría más llevadero y la hubiera disfrutado más.