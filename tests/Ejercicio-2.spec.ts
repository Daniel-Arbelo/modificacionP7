import { expect } from "chai";
import "mocha";
import {Cuatroenraya} from "../src/ejercicio-2/CuatroEnRaya";

let m:Cuatroenraya = new Cuatroenraya();


m.maya[5][0] = 1;
m.maya[5][1] = 2;

m.maya[4][1] = 1;
m.maya[4][0] = 2;


m.maya[3][0] = 1;
m.maya[3][1] = 2;

m.maya[2][0] = 1;
m.maya[5][3] = 2;

m.maya[1][0] = 1;
m.maya[5][4] = 2;

m.maya[0][0] = 1; // 4 en raya


describe(" Ejercicio 2 - 4 en raya.", () =>{
    it("Si comprobamos la la última ficha que introdució el jugador 1 tiene que dar true ya que hay 4 en raya",() =>{
        expect(m.comprobarSiHay4(0,0,1)).to.be.eqls(true);
    });
    it("Si comprobamos que la columna 0 está a tope da true",() =>{
        expect(m.columnaAtope(0)).to.be.eqls(true);
    });
    it("Si comprobamos que la columna 1 está a tope da false",() =>{
        expect(m.columnaAtope(1)).to.be.eqls(false);
    });
    it("Si comprobamos la fila donde se colocaría una ficha en la columna 2 tiene que dar 0",() =>{
        expect(m.colocarFicha(2)).to.be.eqls(0);
    });
    it("Si comprobamos que si queda hueco tiene que devolver true",() =>{
        expect(m.quedaHueco()).to.be.eqls(true);
    });
});


