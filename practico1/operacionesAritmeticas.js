//Parte 2
//3
//a
let cantidadDiscos = 4;
let cantidadCd = 6;
let cantidadCassettes = 36;
let cantidadMp3 = 40;

//b
cantidadDiscos + cantidadCd;

//cambio el valor de la cantidad de discos para que de 44 el R. final
cantidadDiscos = 5;

let sumaDiscosCD = cantidadDiscos + cantidadCd;
console.log(sumaDiscosCD);
//c
cantidadMp3 - cantidadCassettes;

let restaMp3Cassettes = cantidadMp3 - cantidadCassettes;
console.log(cantidadMp3 - cantidadCassettes);

sumaDiscosCD * restaMp3Cassettes;

//d
let resultadoFinal = sumaDiscosCD * restaMp3Cassettes;
console.log(resultadoFinal);

//e
let esPar = resultadoFinal % 2 === 0;
console.log(esPar);

//f
console.log(
  "Mis variables iniciales fueron: " +
    cantidadDiscos +
    ", " +
    cantidadCd +
    ", " +
    cantidadCassettes +
    ", " +
    cantidadMp3 +
    ". " +
    "La respuesta a verificar si el resultado final es par es: " +
    esPar
);
//g operacionesAritmeticas.js
