import { expect } from "chai";
import "mocha";

import {PokemonFuegoCreator} from "../src/modificacionP8/PokemonFuegoCreator";
import {PokemonFuego} from "../src/modificacionP8/PokemonFuego";
import {PokemonAguaCreator} from "../src/modificacionP8/PokemonAguaCreator";
import {PokemonAgua} from "../src/modificacionP8/PokemonAgua";
import {PokemonTierraCreator} from "../src/modificacionP8/PokemonTierraCreator";
import {PokemonTierra} from "../src/modificacionP8/PokemonTierra";

let HoOhCreator = new PokemonFuegoCreator("Ho-Oh", 78, 78);
let HoOh = HoOhCreator.factoryMethod();

let RhyperiorCreator = new PokemonTierraCreator("Rhyperior", 50, 80);
let Rhyperior = RhyperiorCreator.factoryMethod();

let KyogreCreator = new PokemonAguaCreator("Kyogre", 90, 40);
let Kyogre = KyogreCreator.factoryMethod();

describe(" Modificacion pracitca 8", () =>{
    describe(" PokemonFuegoCreator y PokemonFuego", () =>{
        it("Una instancia de la clase PokemonFuegoCreator puede llamar a la funcon logic y devolver los valores correctos",() =>{
            expect(HoOhCreator.logic()).to.be.eqls("Soy Ho-Oh Mi ataque es de 78 Y mi defensa de 78");
        });
        it("Una instancia de la clase PokemonFuegoCreator puede instanciar un objeot del la clase PokemonFueg gracias al metodo factryMethod",() =>{
            expect(HoOhCreator.factoryMethod()).to.be.instanceOf(PokemonFuego);
        });
        
        it("Una instancia de la clase PokemonFuego tiene que tener un getter del nombre",() =>{
            expect(HoOh.getNombre()).to.be.eqls("Ho-Oh");
        });
        it("Una instancia de la clase PokemonFuego tiene que tener un getter del ataque",() =>{
            expect(HoOh.getAtaque()).to.be.eqls(78);
        });
        it("Una instancia de la clase PokemonFuego tiene que tener un getter del defensa",() =>{
            expect(HoOh.getDefensa()).to.be.eqls(78);
        });
        it("Una instancia de la clase PokemonFuego tiene que tener un grito de batalla",() =>{
            expect(HoOh.gritoDeBatalla()).to.be.eqls("Lanzando fogonazo!!!");
        });

    });

    describe(" PokemonTierraCreator y PokemonTierra", () =>{
        it("Una instancia de la clase PokemonTierraCreator puede llamar a la funcon logic y devolver los valores correctos",() =>{
            expect(RhyperiorCreator.logic()).to.be.eqls("Soy Rhyperior Mi ataque es de 50 Y mi defensa de 80");
        });
        it("Una instancia de la clase PokemonTierraCreator puede instanciar un objeot del la clase PokemonFueg gracias al metodo factryMethod",() =>{
            expect(RhyperiorCreator.factoryMethod()).to.be.instanceOf(PokemonTierra);
        });
        
        it("Una instancia de la clase PokemonTierra tiene que tener un getter del nombre",() =>{
            expect(Rhyperior.getNombre()).to.be.eqls("Rhyperior");
        });
        it("Una instancia de la clase PokemonTierra tiene que tener un getter del ataque",() =>{
            expect(Rhyperior.getAtaque()).to.be.eqls(50);
        });
        it("Una instancia de la clase PokemonTierra tiene que tener un getter del defensa",() =>{
            expect(Rhyperior.getDefensa()).to.be.eqls(80);
        });
        it("Una instancia de la clase PokemonTierra tiene que tener un grito de batalla",() =>{
            expect(Rhyperior.gritoDeBatalla()).to.be.eqls("Lanzando rocaa!!!");
        });

    });

    describe(" PokemonAguaCreator y PokemonAgua", () =>{
        it("Una instancia de la clase PokemonAguaCreator puede llamar a la funcon logic y devolver los valores correctos",() =>{
            expect(KyogreCreator.logic()).to.be.eqls("Soy Kyogre Mi ataque es de 90 Y mi defensa de 40");
        });
        it("Una instancia de la clase PokemonAguaCreator puede instanciar un objeot del la clase PokemonFueg gracias al metodo factryMethod",() =>{
            expect(KyogreCreator.factoryMethod()).to.be.instanceOf(PokemonAgua);
        });
        
        it("Una instancia de la clase PokemonAgua tiene que tener un getter del nombre",() =>{
            expect(Kyogre.getNombre()).to.be.eqls("Kyogre");
        });
        it("Una instancia de la clase PokemonAgua tiene que tener un getter del ataque",() =>{
            expect(Kyogre.getAtaque()).to.be.eqls(90);
        });
        it("Una instancia de la clase PokemonAgua tiene que tener un getter del defensa",() =>{
            expect(Kyogre.getDefensa()).to.be.eqls(40);
        });
        it("Una instancia de la clase PokemonAgua tiene que tener un grito de batalla",() =>{
            expect(Kyogre.gritoDeBatalla()).to.be.eqls("Lanzando chorro de agua!!!");
        });

    });
});