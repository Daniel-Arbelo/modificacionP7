import { expect } from "chai";
import "mocha";
import {NumeroRacional} from "../src/Modificacion2";

describe(" Ejercicio12 de mdificación - Clase Racionales", () =>{
    it("Se debe poder imprimir el racional 7/8 ",() =>{
        expect((new NumeroRacional(7,8).print())).to.be.eqls("7/8");
    });
    it("Se debe poder acceder al numerador con un getter que da 7 ",() =>{
        expect((new NumeroRacional(7,8).getNumerador())).to.be.eqls(7);
    });
    it("Se debe poder acceder al denominador con un getter que da 8 ",() =>{
        expect((new NumeroRacional(7,8).getDenominador())).to.be.eqls(8);
    });
    it("Se debe poder simplificar de 4/8 a 1/2 ",() =>{
        expect((new NumeroRacional(4,8).simplificar()).print()).to.be.eqls("1/2");
    });
    it("Se debe poder hacer el inverso de 4/8 a 8/4 ",() =>{
        expect((new NumeroRacional(4,8).inverso()).print()).to.be.eqls("8/4");
    });
    it("Se debe  poder acceder al decimal con los decimales que le especificamos, ej 7/8 con 2 decimales da 0.88 ",() =>{
        expect((new NumeroRacional(7,8).decimal(2))).to.be.eqls('0.88');
    });

});