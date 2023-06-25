//CUENTA REGRESIVA
let parrafo = "";
//Cree un bucle de 10 a 0. Ayuda: inicializador: let i = 10;
  for(let i = 10; i >= 0; i--) {
    //imprima cada iteración por consola utilizando console.log()
    console.log(i)
    //declaración condicional
    if(i ===  10){
        parrafo = "Cuenta regresiva 10 ";
        //console.log(parrafo)
    }
    else if(i !== 0 && i !== 10){
        parrafo += i; 
    }
    else{
        parrafo += " Lanzamiento!";
    }
}
console.log(parrafo)

    