import { expect } from "chai";
import "mocha";
import {productTable} from "../src/Modificacion1";

describe(" Ejercicio1 de mdificación - Tablas de multiplicar", () =>{
    it("productTable(-3) tiene que devolver undefined ",() =>{
        expect(productTable(-3)).to.be.eqls(undefined);
    });
    it("productTable(0) tiene que devolver undefined ",() =>{
        expect(productTable(0)).to.be.eqls(undefined);
    });
    it("productTable(1) tiene que devolver [ [1] ] ",() =>{
        expect(productTable(1)).to.be.eqls([ [1] ]);
    });

    it("productTable(2) tiene que devolver [ [ 1, 2 ], [ 2, 4 ] ] ",() =>{
        expect(productTable(2)).to.be.eqls([ [ 1, 2 ], [ 2, 4 ] ]);
    });
    it("productTable(3) tiene que devolver [ [ 1, 2, 3 ], [ 2, 4, 6 ], [ 3, 6, 9 ] ] ",() =>{
        expect(productTable(3)).to.be.eqls([ [ 1, 2, 3 ], [ 2, 4, 6 ], [ 3, 6, 9 ] ]);
    });
});