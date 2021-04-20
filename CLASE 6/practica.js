//EJERCICIO 1 

function invertir(array) {

    for (let i = 0; i < array.length; i++) {
        const element = array [i];
        
    }

}

console.log(invertir([1, 2, 3, 4,]))//[4,3,2,1]
console.log("------------------------------------------------");

/* //EJERCICIO 2

function pares(arrayInicial) {

    let numerosPares = [];
    arrayInicial[0] % 2 == 0 ? numerosPares.push(arrayInicial[0]) : "";
    arrayInicial[1] % 2 == 0 ? numerosPares.push(arrayInicial[1]) : "";
    arrayInicial[2] % 2 == 0 ? numerosPares.push(arrayInicial[2]) : "";
    arrayInicial[3] % 2 == 0 ? numerosPares.push(arrayInicial[3]) : "";

    return numerosPares
}

console.log(pares([1, 2, 3, 4]));//[2,4]
console.log("------------------------------------------------"); */

/* //EJERCICIO 3 

function tipoDeTexto(type, array) {

    if (typeof (array[0]) == type) { }
    else {
        
        return false
    }

    if (typeof (array[1]) == type) { }
    else {

        return false
    }

    if (typeof (array[2]) == type) { }
    else {

        return false
    }

    if (typeof (array[3]) == type) { }
    else {

        return false
    }
    return true
};

console.log(tipoDeTexto('number', [1, 2, 3, 4])); // True
console.log(tipoDeTexto('number', [1,2,'hola',,4])); //False
console.log("------------------------------------------------");


//EJERCICIO 4 

function suma(n) {

    if (tipoDeTexto("number", n) === true){
    return n[0] + n[1] + n[2] + n[3]}
    else { return "Error: array corrupto"};
       
}

console.log(suma([1,2,3,4]));//10
console.log(suma([1,"2",3,4]));//Error: array corrupto
console.log("------------------------------------------------");

//EJERCICIO 5 /PRIMER EJEMPLO

function paresInvertidos(nuevoArray1) {
    let y = invertir(nuevoArray1);
    console.log(y);
    let z = pares(y);
    return z
};

console.log(paresInvertidos([1,2,3,4]));//[4,3,2,1], [4,2]
console.log("------------------------------------------------");


//EJERCICIO 5 /SEGUNDO EJEMPLO

function frasesIrracionales(nuevoArray2,nuevoArray3) {
    return nuevoArray2.join(" , ") + nuevoArray3.join(" , ");
}

console.log(frasesIrracionales(["Hola","s","o","y"],[" una","funcion","muy","perfecta"]));//Hola , s , o , y una , funcion , muy , perfecta
console.log("------------------------------------------------");
 */