enum Alergenos {
    Huevo = 1,
    Cacahuete = 2,
    Marisco = 4,
    Fresa = 8,
    Tomate = 16,
    Chocolate = 32,
    Polen = 64,
    Gato = 128
  }
/**
 * Funcion que pasando un numero, pasa un array con los alergenos que contiene ese numero
 * @param numero 
 * @returns array con cadenas de los alergenos
 */
export function getAllergens(numero: number): string[] | undefined {
    if (!Number.isInteger(numero) || numero < 0) {
      return undefined;
    }
    
    const sol: string[] = [];
  
    for (const alergeno in Alergenos) {
      const valorAlergeno = parseInt(alergeno);
      if (!isNaN(valorAlergeno) && (valorAlergeno & numero) === valorAlergeno) {
        sol.push(Alergenos[parseInt(alergeno)]);
      }
    }
  
    return sol;
}
/*
console.log(getAllergens(129)); 
console.log(getAllergens(257)); 
console.log(getAllergens(256)); 
console.log(getAllergens(515)); 
console.log(getAllergens(84));*/