let vaso1 = "Azul";
let vaso2 = "Rojo";

function intercambiar(v1, v2) {
    const aux = v1;
    v1 = v2;
    v2 = aux;
    console.log("--------adentro---------");
    console.log("vaso 1: " + v1);
    console.log("vaso 2: " + v2);
}

console.log("vaso 1: " + vaso1);
console.log("vaso 2: " + vaso2);



intercambiar();
console.log("------------------");
console.log("vaso 1: " + vaso1);
console.log("vaso 2: " + vaso2);

console.log("ej 1 ------------------");

function intercambiar(v1, v2) {
    const aux = v1;
    v1 = v2;
    v2 = aux;
    return "vaso1: " + v1 + "\nvaso 2: " + v2
}

console.log("vaso 1: " + vaso1);
console.log("vaso 2: " + vaso2);

const mensaje = intercambiar (vaso1, vaso2);

console.log(intercambiar (vaso1, vaso2));
console.log ("--------------");
console.log( mensaje);
