const maximoComunDivisor = (a, b) => {
    let temporal; //Para no perder b
    while (b !== 0) {
        temporal = b;
        b = a % b;
        a = temporal;
    }
    return a;
};

export class NumeroRacional {
    constructor(private numerador:number, private denominador:number){

    }

    getNumerador(){
        return this.numerador;
    }

    getDenominador(){
        return this.denominador;
    }

    simplificar(){
        let maximo = maximoComunDivisor(this.numerador, this.denominador);
        return new NumeroRacional(this.numerador/maximo, this.denominador/maximo);
    }

    inverso(){
        return new NumeroRacional(this.denominador, this.numerador);
    }

    suma(racional: NumeroRacional){
        let nuevoDenominador = this. denominador * racional.getDenominador();
        let nuevoNumerador = (this.numerador / nuevoDenominador) + (racional.getNumerador() / nuevoDenominador);
        console.log(nuevoNumerador);
        console.log(nuevoDenominador);
    }

    multi(racional: NumeroRacional){
        return new NumeroRacional(this.numerador * racional.getNumerador(), this.denominador * racional.getDenominador());
    }

    div(racional: NumeroRacional){
        return new NumeroRacional(this.numerador * racional.getDenominador(), this.denominador * racional.getNumerador());
    }

    decimal(numDecimales){
        return (this.numerador / this.denominador).toFixed(numDecimales);
    }

    print() {
        let sol = "";
        sol += this.numerador;
        sol += "/";
        sol += this.denominador;
        return sol;
    }
}
