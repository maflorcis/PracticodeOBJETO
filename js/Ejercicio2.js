/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
● Una propiedad titular con el valor "Alex".
● Una propiedad saldo, teniendo como valor inicial 0.
● Un método ingresar() que permita añadir dinero a la cuenta, pasando la
cantidad como parámetro
● Un método extraer() que permita retirar la cantidad pasada como
parámetro.
● Un método informar() que retorne la información del estado de la cuenta.
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a
mostrar la descripción del estado de la cuenta.
Rectángulos*/



/* ASÍ ES COMO LO PLANTEAMOS CON MAURI ANTES DE CLASES

let cuenta = {
    titular: 'Alex',
    saldo: 0,
    informar: () => { alert("La cuenta del titular " + cuenta.titular + " tiene $" + cuenta.saldo + " a la fecha.") },
    ingresar: () => {
        while (confirm("¿Desea depositar dinero?") == true) {
            let deposito = parseFloat(prompt("Ingrese cifra a depositar"));
            if (isNaN(deposito) == false && deposito >=0) {
                cuenta.saldo = cuenta.saldo + deposito
                alert("El dinero disponible es $"+cuenta.saldo)
            }
            else{
                alert("Lo ingresado no es una cifra válida.")
            }
        }
    },
    extraer: () => {
        while (confirm("¿Desea extraer dinero?") == true) {
            let retiro = parseFloat(prompt("Ingrese cifra a extraer"));
            if (isNaN(retiro) == false && retiro >=0) {
                if(cuenta.saldo-retiro>=0){
                    cuenta.saldo = cuenta.saldo - retiro
                    alert("El dinero disponible es $"+cuenta.saldo)
                }
                else if(cuenta.saldo-retiro<=0){
                    alert("Saldo insuficiente")
                }               
            }
            else {
                alert("Lo ingresado no es una cifra válida.")
            }
        }
        }
    }
   
cuenta.informar()
cuenta.ingresar()
cuenta.informar()
cuenta.extraer()
cuenta.informar()
*/

//EJERCICIO HECHO POR EMILSE EN CLASES

/*
let cuenta = {
    titular: 'Alex',
    saldo: 0,
    transferir(){
        console.log('estamos en el metodo transferir');
        console.log(this); //this hace referencia al objeto
    },

    ingresar(deposito){
        console.log(this);
        this.saldo +=deposito;
        console.log(`<p>Se ingresó $ ${this.saldo}</p>`);

    },
    extraer(retiro){
        if(this.saldo >= retiro){
        this.saldo-= retiro;
        document.write(`<p>Se retiro ${retiro}</p>`);
    }else{
        document.write(`<p>saldo insuficiente</p>`);
    }; 
},

    informar(){ document.write(`<p>La cuenta de ${this.titular}, posee un saldo de $ ${this.saldo}</p>`)
    },

   
}


cuenta.informar(cuenta);
console.log(this)

let deposito = parseFloat(prompt('ingrese el monto deseado'));
cuenta.ingresar(deposito);

let retiro = parseFloat(prompt('ingrese el monto deseado a extraer'));
cuenta.extraer(retiro);

cuenta.informar();


*/

// ACÁ VA LA CONSIGNA QUE PIDIÓ EN CLASES EMILSE: AJUSTAR ESTE EJERCICIO USANDO CLASES 

class Cuenta{
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

//creamos get y set

    getTitular(){
        return this.titular;
    }
     
    setTitular(newtitular){
        this.titular = newtitular;
     }

     getSaldo(){
        return this.saldo;
    }
     
    setSaldo(newsaldo){
        this.saldo = newsaldo;
     }

//creamos los métodos
transferir(){
    console.log('estamos en el metodo transferir');
    console.log(this); //this hace referencia al objeto
}

ingresar(){
    console.log(this.saldo);
    let deposito = parseFloat(prompt('ingrese el monto deseado'));
    this.saldo +=deposito;
    document.write(`<p>Se ingresó $ ${this.saldo}</p>`);

}
extraer(){
    let retiro = parseFloat(prompt('ingrese el monto deseado a extraer'));
    if(this.saldo >= retiro){
    this.saldo-= retiro;
    document.write(`<p>Se retiró $ ${retiro}</p>`);
}else{
    document.write(`<p>saldo insuficiente</p>`);
}; 
}

informar(){ document.write(`<h3>La cuenta de ${this.titular}, posee un saldo de $ ${this.saldo}</h3>`)
}

}


//instanciar un objeto 

let cuenta1 = new Cuenta ('Alex', 0)

cuenta1.informar()

cuenta1.ingresar();

cuenta1.extraer();

cuenta1.informar();
