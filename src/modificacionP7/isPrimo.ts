export function isPrimo(numero:number){
    for (var i = 2; i < numero; i++) {
      
        if (numero % i === 0) {
            return false;
        }
      
    }
      
    return numero !== 1;
      
}