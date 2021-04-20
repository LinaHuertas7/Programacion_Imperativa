let dameCinco = ( )=> (1,2,3,4,5);
console.log(dameCinco())

let  multiplicarPorDos = () => 123 * 2;
console.log (multiplicarPorDos())

function agregarHttp(url) {
    return "http//" + url
};
function procesar(array,callaBack){
    for (let i =0;i <array.length;i++) {
        array[i]=callaBack(array[i]);
    } ;
return array
}

console.log (agregarHttp());