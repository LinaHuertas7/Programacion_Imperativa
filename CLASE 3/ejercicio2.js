// Ejercicio2
const suma = function (x,y) {
    return x + y    
}

const resta = function (x,y) {
    return x - y  

}

const multiplicacion = function (x,y) {
    return x * y 
}

const division = function (x,y) {
    return x / y 
}

console.log(suma(2,5));//7
console.log(resta(2,5));//-3
console.log(multiplicacion(2,5));//10
console.log(division(2,5));//0.4

// Ejercicio 3 

let nombreJugador = "Messi"
let precioEnDolares = 0
let golesJugador = 0

function hacerGol() {
    golesJugador ++;
    precioEnDolares= precioEnDolares + 10000;
    console.log("GOLL!!!!");//Golllll
    console.log(golesJugador);//1
    console.log(precioEnDolares);//10000   
}

hacerGol(); 
hacerGol();
hacerGol();
hacerGol();
hacerGol();
hacerGol();

//Ejercicio 4

function hatTrick() {
    hacerGol();
    hacerGol();
    hacerGol();
    precioEnDolares = precioEnDolares + precioEnDolares * 0.1
    console.log(precioEnDolares);    
}

hatTrick();