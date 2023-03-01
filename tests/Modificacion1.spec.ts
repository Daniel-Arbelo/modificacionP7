import { expect } from "chai";
import "mocha";
import {productTable} from "../src/Modificacion1";

describe(" Ejercicio1 de mdificación - Tablas de multiplicar", () =>{
    it("Se debe poder llamar a la función",() =>{
        expect((typeof(productTable(3))).to.be.eqls(number[][]));
        //expect(getAllergens(129)).to.be.eqls(['Huevo', 'Gato']);
    });
});