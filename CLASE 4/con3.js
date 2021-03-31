function tipoDeFigura (x) {
    switch (x) {
        case 3:
            return "Triangulo"
            break;
        case 4:
            return "Cuadrilatero"
            break;
        case 5:
            return "Pentagono"
            break;
        
        default:
            return "Poligono"
            break;
    }
    
}

console.log(tipoDeFigura(6));