//LISTA DE INVITADOS
let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro",
    "Emilia"];

let rechazados = [];
let admitidos = [];

for(let i = 0; i < personas.length; i++){
    if(personas[i] === "Jose" ){
        rechazados.push(personas[i]);
        
    }
    else if(personas[i] === "Sofia" ){
        rechazados.push(personas[i]);
    }
    else if(personas[i] !== "Sofia" && personas[i] !== "Jose"){
        admitidos.push(personas[i])
    }
}

//console.log(rechazados)
//console.log(admitidos)

let listaA = "La lista de invitados admitidos es: "

for (let i = 0; i < admitidos.length; i++) {
    if (i === admitidos.length - 1) {
    listaA = listaA.slice(0, listaA.length - 2)
    listaA += ' y ' + admitidos[i] + '.';
    } else {
    listaA += admitidos[i] + ', ';
    }
    }
    console.log(listaA);


let listaR = "La lista de invitados rechazados es: "

for (let i = 0; i < rechazados.length; i++) {
    if (i === rechazados.length - 1) {
    listaR = listaR.slice(0, listaR.length - 2)
    listaR += ' y ' + rechazados[i] + '.';
    } else {
    listaR += rechazados[i] + ', ';
    }
    }
    console.log(listaR);


//EXTRA:
    let listaAdmitidosOrdenada = admitidos.sort();
   // console.log(listaAdmitidosOrdenada);

    let listaAOrdenada = "La lista de invitados admitidos ordenada es: "

    for (let i = 0; i < listaAdmitidosOrdenada.length; i++) {
        if (i === admitidos.length - 1) {
        listaAOrdenada  = listaAOrdenada.slice(0, listaAOrdenada.length - 2)
        listaAOrdenada += ' y ' + listaAdmitidosOrdenada[i] + '.';
        } else {
        listaAOrdenada += listaAdmitidosOrdenada[i] + ', ';
        }
        }
        console.log(listaAOrdenada);
    


    let listaRechazadosOrdenada = rechazados.sort();
    //console.log(listaRechazadosOrdenada);

    let listaROrdenada = "La lista de invitados rechazados ordenada es: "

    for (let i = 0; i < listaRechazadosOrdenada.length; i++) {
        if (i === listaRechazadosOrdenada.length - 1) {
        listaROrdenada  = listaROrdenada.slice(0, listaROrdenada.length - 2)
        listaROrdenada += ' y ' + listaRechazadosOrdenada[i] + '.';
        } else {
        listaROrdenada += listaRechazadosOrdenada[i] + ', ';
        }
        }
        console.log(listaROrdenada);