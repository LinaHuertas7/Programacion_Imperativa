// EJERCICIO 1

function esPar(n) {
    let operacionMatematica = (n % 2)
    return operacionMatematica == 0 ? "Es un numero par" : "Es un numero impar";
}

console.log(esPar(45));//Es un numero impar
console.log(esPar(62));//Es un numero par
console.log("--------------------");

// EJERCICIO 2 

function Peaje(PagoPeaje) {
    return PagoPeaje == true ? "Levantar la barrera" : "No levantar la barrera";
}

console.log(Peaje(true));//Levantar la barrera
console.log(Peaje(false));//No levantar la barrera
console.log("--------------------");

// EJERCICIO 3

function getRandom(n) {
    let random = Math.floor(Math.random() * (10 - 0)) + 0;
    return n === random ? "El numero es igual" : "El numero es diferente";
}

console.log(getRandom(2))
console.log(getRandom(7))
console.log(getRandom(3))
console.log("--------------------");

// EJERCICIO 4

function esNavidad(fecha) {
    const navidad = ("2021/12/25")
    return fecha === navidad ? "Feliz Navidad!!" : "Falta tiempo para Navidad";
}

console.log(esNavidad("2021/12/25"));//Feliz Navidad!!
console.log(esNavidad("2021/11/25"));//Falta tiempo para Navidad!!
console.log("--------------------");

// EJERCICIO 5 

function diasDelMes(mes) {
    switch (mes) {
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            return 31;
            break;
        case "Febrero":
            return 28;
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            return 30;
            break;

        default:
            break;
    }

}
console.log(diasDelMes("Octubre"));//31
console.log(diasDelMes("Febrero"));//28
console.log(diasDelMes("Noviembre"));//30
console.log("--------------------");

//EJERCICIO 6 

function notasAlumnos(n) {
    switch (n) {
        case(1):
        case(2):
        case(3):
        case(4):
            return "El alumno debe recursar";
            break;
        case (5):
        case (6):
            return "El alumno debe ir a recuperatorio";
            break;
        case (7):
        case (8):
        case (9):
        case (10):
            return "Felicitaciones!! El alumno ha aprobado";
            break;
        default:
            break;
    }
}
console.log(notasAlumnos(3));//El alumno debe recursar
console.log(notasAlumnos(6));//El alumno debe ir a recuperatorio
console.log(notasAlumnos(7));//Felicitaciones!! El alumno ha aprobado
console.log("--------------------");


//EJERCICIO 7

function abrirParacaidas(altura,velocidad) {
    let condicion = (altura > 2000 && altura < 3000 && velocidad < 1000)
    return velocidad && condicion;
}

console.log(abrirParacaidas(1000,500));//False
console.log(abrirParacaidas(2700,1500));//False
console.log(abrirParacaidas(2800,700));//True
console.log("--------------------");

//EJERCICIO 8

function precio(tomate, papas, huevo) {
    let base=150
    base += tomate? 20: 0
    base += papas? 50: 0
    base += huevo? 60: 0
    return base;
    
}

console.log(precio(true, false, true)); //150+20+60=230
console.log(precio(true, true, true)); //150+20+50+60= 280
console.log(precio(false, true, true)); //150+50+60= 260
console.log("--------------------");

//EJERCICIO 9 SWICH

function estacionClimatica(mes) {
    switch (mes) {
        case "Junio":
        case "Julio":
        case "Agosto":
            return "Verano";
            break;
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
            return "Otoño";
        case "Diciembre":
        case "Enero":
        case "Febrero":
            return "Invierno";
        case "Marzo":
        case "Abril":
        case "Mayo":
            return "Primavera";
        default:
            break;
    }
    
}
console.log(estacionClimatica("Julio"));//Verano
console.log(estacionClimatica("Octubre"));//Otoño
console.log(estacionClimatica("Diciembre"));//Invierno
console.log(estacionClimatica("Mayo"));//Primavera
console.log("--------------------");