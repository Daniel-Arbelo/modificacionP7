import { expect } from "chai";
import "mocha";

import {PrimeNumber} from "../src/modificacionP7/PrimeNumber";

let prueba = PrimeNumber.getPrimeNumberInstance(9);


describe(" Modificacion pracitca 7", () =>{
    it("Getter un objeto inicializado con los primeros 9 numero primos tiene que dar [ 2,  3,  5,  7, 11, 13, 17, 19, 23 ]",() =>{
        expect(prueba.getPrimos()).to.be.eqls([ 2,  3,  5,  7, 11, 13, 17, 19, 23 ]);
    });
    it("Getter un objeto inicializado con los primeros 5 numero primos tiene que dar [ 2,  3,  5,  7, 11 ]",() =>{
        let prueba2 = PrimeNumber.getPrimeNumberInstance(5);
        expect(prueba2.getPrimos()).to.be.eqls([ 2,  3,  5,  7, 11 ]);
    });
    it("getNNumerosPrimos de los primeros 7 numeros primos [ 2,  3,  5,  7, 11, 13, 17 ]",() =>{
        expect(prueba.getNNumerosPrimos(7)).to.be.eqls([ 2,  3,  5,  7, 11, 13, 17 ]);
    });
    it("addPrimeNumber al objeto con los primeros 5 numeros primos del numero primo 29",() =>{
        prueba.addPrimeNumber(29);
        expect(prueba.getPrimos()).to.be.eqls([ 2,  3,  5,  7, 11, 29 ]);
    });
    it("addPrimeNumber al objeto con los primeros 5 numeros primos mas el 29 del numero primo 14 se queda igual",() =>{
        prueba.addPrimeNumber(14);
        expect(prueba.getPrimos()).to.be.eqls([ 2,  3,  5,  7, 11, 29 ]);
    });
    it("getIndex en la posicion 1 del array [ 2,  3,  5,  7, 11, 29 ] tiene que devolver un 3",() =>{
        expect(prueba.getIndex(1)).to.be.eqls(3);
    });
    it("getIndex en la posicion 6 del array [ 2,  3,  5,  7, 11, 29 ] tiene que devolver un undefined",() =>{
        expect(prueba.getIndex(6)).to.be.eqls(undefined);
    });
    it("getLength del array [ 2,  3,  5,  7, 11, 29 ] tiene que devolver un 6",() =>{
        expect(prueba.getLenght()).to.be.eqls(6);
    });
    it("getNumerosPrimosInRange(6,20) tiene que devolver el array [ 7, 11, 13, 17, 19 ]",() =>{
        expect(prueba.getNumerosPrimosInRange(6,20)).to.be.eqls([ 7, 11, 13, 17, 19 ]);
    });
    it("Tiene que ser iterable, si iteramos sumando los elemntos del objeto con los primos [ 2,  3,  5,  7, 11, 29 ]",() =>{
        expect([...prueba].reduce((acc,element) => acc + element)).to.be.eqls(57);
    });

});