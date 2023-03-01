export function getSpiralsol(n:number):number[][]{
    const sol: number[][] = [];

    // Inicializar matriz con ceros
    for (let i = 0; i < n; i++) {
      sol[i] = new Array<number>(n).fill(0);
    }
  
    let rowStart = 0;
    let rowEnd = n - 1;
    let colStart = 0;
    let colEnd = n - 1;
    let num = 1;
  
     // Definimos las variables necesarias
  let valorActual = 1;
  let filaInicio = 0;
  let filaFin = n - 1;
  let columnaInicio = 0;
  let columnaFin = n - 1;

  // Mientras queden elementos por añadir a la matriz
  while (valorActual <= n * n) {
    // Rellenamos la fila superior, de izquierda a derecha
    for (let columna = columnaInicio; columna <= columnaFin; columna++) {
      sol[filaInicio][columna] = valorActual;
      valorActual++;
    }

    // Rellenamos la columna derecha, de arriba a abajo
    for (let fila = filaInicio + 1; fila <= filaFin; fila++) {
      sol[fila][columnaFin] = valorActual;
      valorActual++;
    }

    // Rellenamos la fila inferior, de derecha a izquierda
    for (let columna = columnaFin - 1; columna >= columnaInicio; columna--) {
      sol[filaFin][columna] = valorActual;
      valorActual++;
    }

    // Rellenamos la columna izquierda, de abajo a arriba
    for (let fila = filaFin - 1; fila > filaInicio; fila--) {
      sol[fila][columnaInicio] = valorActual;
      valorActual++;
    }

    // Actualizamos los índices para la siguiente vuelta
    filaInicio++;
    filaFin--;
    columnaInicio++;
    columnaFin--;
  }

  // Devolvemos la matriz espiral
  return sol;
}

console.log(getSpiralsol(3));