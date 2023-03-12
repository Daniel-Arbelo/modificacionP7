import 'mocha';
import { expect } from "chai";

import {Lista} from '../src/ejercicio-2/Lista';

let lista = new Lista<number>(1,3,4,2);
let lista2 = new Lista<number>(4,5,7);
let lista3 = new Lista<number>(9,8);
let strings = new Lista<string>('apple', 'banana', 'orange');
let strings2 = new Lista<string>('kiwi', 'water melon');
let string3 = new Lista<string>('mango', 'grapes');



describe('Ejercicio 2', () => {
    describe('Método append', () => {
        it('lista.append(lista2) tiene que dar de resultado la lista [ 1, 3, 4, 2, 4, 5, 7 ]', () => {
            lista.append(lista2);
            expect(lista.getlista()).to.be.eqls([ 1, 3, 4, 2, 4, 5, 7]);
        });
        it('strings.append(strings2) tiene que dar de resultado la lista [ \'apple\', \'banana\', \'orange\',  \'kiwi\', \'water melon\']', () => {
            strings.append(strings2);
            expect(strings.getlista()).to.be.eqls([ 'apple', 'banana', 'orange',  'kiwi', 'water melon']);
        });

    });
    describe('Método concatenate', () => {
        it('La concatenacion de las listas [ 1, 3, 4, 2, 4, 5, 7 ] , [ 4, 5, 7 ] y [9, 8] tiene que dar la lista resultado de todas estas', () => {
            let mixted = Lista.concatenate(lista, lista2, lista3); 
            expect(mixted.getlista()).to.be.eqls([ 1, 3, 4, 2, 4, 5, 7, 4, 5, 7, 9, 8]);
        });
        it('La concatenacion de las listas de string tiene que dar la lista resultado de todas estas', () => {
            let mixted2 = Lista.concatenate(strings, strings2, string3); 
            expect(mixted2.getlista()).to.be.eqls([ 'apple', 'banana', 'orange', 'kiwi', 'water melon', 'kiwi', 'water melon', 'mango', 'grapes' ]);
        });

    });

    describe('Método filter', () => {
        it('Si se filtra la lista [1, 3, 4, 2, 4, 5, 7] con la condicion de que sean < 3 tiene que devolver una lista con los elementos menores que 3', () => {
            expect(lista.filter((elemento) => elemento < 3).getlista()).to.be.eqls([ 1, 2 ]);
        });
        it('Si se filtra la lista [1, 3, 4, 2, 4, 5, 7] con la condicion de que sean > 3 tiene que devolver una lista con los elementos mayores que 3', () => {
            expect(lista.filter((elemento) => elemento > 3).getlista()).to.be.eqls([ 4, 4, 5, 7 ]);
        });
        it('Si se filtra la lista [ \'apple\', \'banana\', \'orange\',  \'kiwi\', \'water melon\'] con la condicion de que el tamaño de los strings sea  > 5 tiene que devolver una lista con los elementos con tamaño mayor que 5', () => {
            expect(strings.filter((elemento) => elemento.length > 5).getlista()).to.be.eqls([ 'banana', 'orange', 'water melon' ]);
        });
    });
    describe('Método lenght', () => {
        it(' La lista [1, 3, 4, 2, 4, 5, 7] tiene tamaño 7', () => {
            expect(lista.lenghth()).to.be.eqls(7);
        });
        it(' La lista [ 4, 5, 7] tiene tamaño 3', () => {
            expect(lista2.lenghth()).to.be.eqls(3);
        });
        it(' La lista [ \'kiwi\', \'water melon\' ] tiene tamaño 2', () => {
            expect(strings2.lenghth()).to.be.eqls(2);
        });
    });

    describe('Método Map', () => {
        it('La funcion map de la lista [1, 3, 4, 2, 4, 5, 7] pasandole una funcion que multiplica por 2 cada elemento tiene que retornar una nueva lista con los elementos multipliados por 2', () => {
            expect(lista.map((item) => item * 2).getlista()).to.be.eqls([ 2, 6, 8, 4, 8, 10, 14 ]);
        });
        it('La funcion map de la lista  [ \'kiwi\', \'water melon\' ] pasandole una funcion que añade fresh a cada string tiene que dar la misma lista pero cada elemetno tendrá fresh al final', () => {
            expect(strings2.map((item) => item + ' fresh').getlista()).to.be.eqls([ 'kiwi fresh', 'water melon fresh' ]);
        });
    });

    describe('Método Reduce', () => {
        it('La funcion reduce de la lista [1, 3, 4, 2, 4, 5, 7] pasandole una funcion que suma cada elemto al acumulador con valor inicial 0 da 26', () => {
            expect(lista.reduce(((acc, item) => acc + item), 0)).to.be.eqls(26);
        });
        it('La funcion reduce de la lista [1, 3, 4, 2, 4, 5, 7] pasandole una funcion que suma cada elemto al acumulador multiplicado por 2 con valor inicial 10  da 62', () => {
            expect(lista.reduce(((acc, item) => acc + (item * 2)), 10)).to.be.eqls(62);
        });
    });

    describe('Método Reverse', () => {
        it('La funcion reverse de la lista [1, 3, 4, 2, 4, 5, 7] tiene que dar [ 7, 5, 4, 2, 4, 3, 1 ]', () => {
            expect(lista.reverse().getlista()).to.be.eqls([ 7, 5, 4, 2, 4, 3, 1 ]);
        });
        it('La funcion reverse de la lista [ 4, 5, 7 ] tiene que dar [ 7, 5, 4 ]', () => {
            expect(lista2.reverse().getlista()).to.be.eqls([ 7, 5, 4 ]);
        });
        it('La funcion reverse de la lista [ \'kiwi\', \'water melon\' ] tiene que dar [ \'water melon\', \'kiwi\' ]', () => {
            expect(strings2.reverse().getlista()).to.be.eqls([ 'water melon', 'kiwi' ]);
        });
        
    });
    
    describe('Método For Each', () => {
        it('Con el método For Each se debe poder recorrer la lista [1, 3, 4, 2, 4, 5, 7] e ir sumando sus elementos', () => {
            let suma = 0;
            lista.forEach((elemento) => {
               suma += elemento; 
            });
            expect(suma).to.be.eqls(26);
        });
        it('Con el método For Each se debe poder recorrer la lista [ \'kiwi\', \'water melon\' ] e ir uniendo su contenido', () => {
            let suma = '';
            strings2.forEach((elemento) => {
                    suma += elemento; 
            });
            expect(suma).to.be.eqls('kiwiwater melon');
        });
        
    });
    

    
});