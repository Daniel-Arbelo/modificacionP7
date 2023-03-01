import { expect } from "chai";
import "mocha";
import {getAllergens} from "../src/Ejercicio1";

describe(" Ejercicio1 - Alergenos", () =>{
    it("getAllergens(129) tiene que dar ['Huevo', 'Gato']",() =>{
        expect(getAllergens(129)).to.be.eqls(['Huevo', 'Gato']);
    });
    it("getAllergens(256) tiene que dar []",() =>{
        expect(getAllergens(256)).to.be.eqls([]);
    });
    it("getAllergens(129) tiene que dar undefined",() =>{
        expect(getAllergens(-5)).to.be.eqls(undefined);
    });
});