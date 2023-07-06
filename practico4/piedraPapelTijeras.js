const readlineSync = require("readline-sync");

const piedra = "piedra";
const papel = "papel";
const tijeras = "tijeras";

function obtenerJugadaComputadora() {
  let piedraPapelTijeras = {
    0: piedra,
    1: papel,
    2: tijeras,
  };
  //console.log(piedraPapelTijeras[0])

  let min = 0;
  let max = 2;

  let computadora = Math.floor(Math.random() * (max - min + 1) + min);
  if (computadora === 0) {
    computadora = piedraPapelTijeras[0];
  } else if (computadora === 1) {
    computadora = piedraPapelTijeras[1];
  } else {
    computadora = piedraPapelTijeras[2];
  }

  return computadora;
}
//console.log(obtenerJugadaComputadora)

function obtenerJugadaUsuario() {
  let usuario = readlineSync.question(
    "Las reglas son las siguientes: piedra vence a las tijeras, las tijeras vencen a papel y el papel vence a la piedra. A jugar! Escribe piedra, papel o tijeras: "
  );

  while (!(usuario === piedra || usuario === papel || usuario === tijeras)) {
    usuario = readlineSync.question("Intente nuevamente (piedra, papel o tijeras): ");
  }
  if (usuario === piedra) {
    //console.log(usuario);
  } else if (usuario === papel) {
    //console.log(usuario)
  } else if (usuario === tijeras) {
    //console.log(usuario)
  }
  return usuario;
}

//console.log(obtenerJugadaUsuario())

function determinarGanador(bot, human) {
  if (bot === human) {
    salida = "Empate";
  } else if (bot === piedra && human === papel) {
    salida = "Gana usuario";
  } else if (bot === piedra && human === tijeras) {
    salida = "Gana la Computadora";
  } else if (bot === papel && human == piedra) {
    salida = "Gana la Computadora";
  } else if (bot === papel && human === tijeras) {
    salida = "Gana usuario";
  } else if (bot === tijeras && human === piedra) {
    salida = "Gana usuario";
  } else if (bot === tijeras && human === papel) {
    salida = "Gana la Computadora";
  }
  return salida
}

let jugadaPC = obtenerJugadaComputadora(); //invoco la función y almaceno el resultado en la variable "jugadaPC" en una misma línea
//console.log(jugadaPC)
let jugadaUser = obtenerJugadaUsuario();
//console.log(jugadaUser)
let resultado = determinarGanador(jugadaPC, jugadaUser);
console.log(
  "La computadora eligio: " +
    jugadaPC +
    "." +
    " " +
    "El usuario eligio: " +
    jugadaUser +
    "." +
    " " +
    "El resultado fue: " +
    resultado +
    "."
);

