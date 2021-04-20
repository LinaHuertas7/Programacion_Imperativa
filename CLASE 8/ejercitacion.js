/* Definir un nuevo objeto cuenta que contenga las siguientes propiedades:
- Número de cuenta
- Saldo
- Titular */
/* Crear un método llamado deposito que tenga como parámetros de entrada la cantidad de dinero. Al hacer un depósito la cantidad de dinero se debería sumar al saldo existente. El método deberá también imprimir por pantalla el tipo de transacción realizada y el nuevo saldo. */

let cuenta = {
    numeroCuenta : 1234,
    saldo : 0,
    titular : "Lina Huertas",
    deposito=function (cantidadDinero,) {
        this.saldo += cantidadDinero;
        console.log("Deposito realizado con exito, su saldo actual es de: " + this.saldo);
        
    }
};





