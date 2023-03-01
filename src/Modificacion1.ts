/**
 * Función que pasandole un numero entero positivo, devuelve un array de arrays con N tablas de multiplicar y con sus N primeros resultados. 
 * @param N Numero de tablas de multiplicar que se quieren generar y su tamaño
 * @returns retorna un array con N tablas de multiplicar y con sus N primeros resultados
 */
export function productTable(N:number):number[][] | undefined {
    if (!Number.isInteger(N) || N <= 0) {
        return undefined;
    }
    let sol:number[][] = [];
    let tabla = 1;
    let solParcial:number[] = [];
    let res:number = 0;
    for(let i=0; i < N; i++){
        for(let j=1; j < N+1; j++){
            res = tabla * j;
            solParcial.push(res);
        }
        sol.push(solParcial);
        solParcial = [];
        tabla ++;
    }
    return sol;
}
