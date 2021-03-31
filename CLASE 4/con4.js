/* una función que recibe ingredientes de un sandwich y determina su valor final
base: $150, con tomate $20+, con papas $50+, con huevo $60+
ej function valor(tomate, papa, huevo){}
valor(true, false, true) 150 + 20 + 60
*/
function precio(tomate, papas, huevo){
    let valor = 150;
    if (tomate === true){
        valor+= 20;
    }
    if (papas === true) {
        valor += 50;
    }
    if (huevo === true){
        valor+= 60;
    }
    return valor;

}


//su código aquí

console.log(precio(true, true, true)); //150+20+50+60= 280
console.log(precio(false, true, true)); //150+50+60= 260
console.log(precio(false, false, true)); //150+60= 210
console.log(precio(false, false, false)); //150
console.log(precio(true, true, false)); //150+20+50=220
console.log(precio(true, false, false)); //150+20=170
console.log(precio(true, false, true)); //150+20+60=230
