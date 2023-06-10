//4
let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

//a
console.log(cita.length)

let tamañoDeCita = cita.length;
console.log("El tamaño de cita es: " + tamañoDeCita);

//b
let indice = cita.indexOf("tigres comen trigo")
console.log("El indice del substring es: "+ indice)

//c
let indiceParaSlice = cita.indexOf(" en un trigal");
console.log(indiceParaSlice)

let citaRevisada = cita.slice(0, 31);
console.log(citaRevisada);

