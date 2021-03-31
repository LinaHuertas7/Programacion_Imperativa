// FUNCION EXPRESADA

let sumar = function( numeroA , numeroB ){
    return numeroA + numeroB
}

console.log (sumar( 7 , 9));

// FUNCION DECLARADA

function restar (numeroC, nuemroD) {
    return numeroC - nuemroD
}

console.log (restar( 10 , 3 ));

// ejemplo de scope

let mensaje= "Hola"

function saludar() {
    let mensaje = "Chau";
return mensaje;    
}

console.log (mensaje);
console.log (saludar ());

function saludar1() {
    let nombre = "Lina";
    let apellido = "Huertas";
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}

console.log (saludar1 ())



function esPar(n) {
    let verdadero = true; 
    let falso = false;
    if (n%2==0)
    return (verdadero)
    else return (falso)   
}

console.log (esPar())