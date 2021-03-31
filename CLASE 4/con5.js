function precio(tomate, papas, huevo) {
    let base=150
    base += tomate? 20: 0
    base += papas? 50: 0
    base += huevo? 60: 0
    return base;
    
}
console.log(precio(true, true, true)); //150+20+50+60= 280
console.log(precio(false, true, true)); //150+50+60= 260
console.log(precio(false, false, true)); //150+60= 210
console.log(precio(false, false, false)); //150
console.log(precio(true, true, false)); //150+20+50=220
console.log(precio(true, false, false)); //150+20=170
console.log(precio(true, false, true)); //150+20+60=230