function notasAlumnos(n) {
    switch (n) {
        case n <= 4:
            return "El alumno debe recursar";
            break;
        case n < 7:
            return "El alumno debe ir a recuperatorio";
            break;
        case n >= 7:
            return "Felicitaciones!! El alumno ha aprobado";
            break;
        default:
            break;
    }
}
console.log(diasDelMes(4));
console.log(diasDelMes(6));
console.log(diasDelMes(8));
console.log("--------------------");