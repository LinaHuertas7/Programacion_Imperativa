let alumno = {
    nombre : "Lina",
    numeroDeLegado : 12345,
    listaNotas : [10,10,10,10,9,10,7,10]
}

function calculadoraDeNotas(alumno, notaAprobacion) {
    let acumulado = 0;
    let elementos = alumno.listaNotas.length;
    for (let index = 0; index < elementos.length; index++) {
        acumulado += alumno.listaNotas = array[index];
    }
    let promedio = 0;
    promedio = acumulado / elementos;
    if (promedio >= notaAprobacion) {
        return "Aprobo con un promedio de: " + promedio;
        
    } else {
        return "No aprobaste"
    }
    
}

console.log(calculadoraDeNotas(alumno, 8));