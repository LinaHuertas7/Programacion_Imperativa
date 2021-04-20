let operaciones = {
    sumar : function (a,b) {
        return a+b;
    },
    
    dividir : function (a,b) {
        return a / b;
               
    },

    restar : function (a,b) {
        return a - b;
    },
            
    esPar : function (a) {
        return a % 2 === 0 ? "Es par" : "Impar";
    }
    
};

module.exports = (operaciones);
