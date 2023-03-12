import 'mocha';
import { expect } from "chai";

import {Serie} from '../src/ejercicio-1/Serie';
import {Pelicula} from '../src/ejercicio-1/Pelicula';
import {Documental} from '../src/ejercicio-1/Documental';
import {ColeccionSeries} from '../src/ejercicio-1/ColeccionSeries';
import {ColeccionPeliculas} from '../src/ejercicio-1/ColeccionPeliculas';
import {ColeccionDocumentales} from '../src/ejercicio-1/ColeccionDocumentales';



describe('Ejercicio 1', () => {
    describe('Clase Serie', () => {
        it('Serie("The walking Dead", 100, 2012, 20, 10).getTemporadas() = 10', () => {
            expect(new Serie("The walking Dead", 100, 2012, 20, 10).getTemporadas()).to.be.equal(10);
        });
    });

    describe('Clase Pelicula', () => {
        it('Pelicula("No es país para puretas", 120, 2007, 1.95, "Hermanos Coen").director = Hermanos Coen', () => {
            expect(new Pelicula("No es país para puretas", 120, 2007, 1.95, "Hermanos Coen").getDirector()).to.be.equal("Hermanos Coen");
        });
    });

    describe('Clase Documental', () => {
        it('Documental("No es país para puretas", 120, 2007, 1.95, "Hermanos Coen").director = Hermanos Coen', () => {
            expect(new Documental("Osos polares", 120, 2007, 1.95, "Natioal Geografic").getProductora()).to.be.equal("Natioal Geografic");
        });
    });

    
});