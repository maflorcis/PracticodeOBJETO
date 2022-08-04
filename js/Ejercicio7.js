/* 
7- Nos piden realizar una agenda telefónica de contactos.
Un contacto está deﬁnido por un nombre y un teléfono. Se considera que un
contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá
crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto
(10).
Los métodos de la agenda serán los siguientes:
● aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda
no puede almacenar mas contactos indicar por pantalla.
● existeContacto(Conctacto): indica si el contacto pasado existe o no.
● listarContactos(): Lista toda la agenda
● buscarContacto(nombre): busca un contacto por su nombre y muestra su
teléfono.
● eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se
ha eliminado o no por pantalla
● agendaLlena(): indica si la agenda está llena.
● huecosLibres(): indica cuántos contactos más podemos ingresar.
Crea un menú con opciones por consola para probar todas estas funcionalidades.
*/

//agenda telefónica
//Un contacto está deﬁnido por un nombre y un teléfono
//Se considera que un contacto es igual a otro cuando sus nombres son iguales (identificador único)
//la agenda tiene un tamaño por defecto de 10

//métodos

//● aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar mas contactos indicar por pantalla.
//● existeContacto(Conctacto): indica si el contacto pasado existe o no.
//● listarContactos(): Lista toda la agenda
//● buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
//● eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
//● agendaLlena(): indica si la agenda está llena.
// ● huecosLibres(): indica cuántos contactos más podemos ingresar.
// Crea un menú con opciones por consola para probar todas estas funcionalidades.

class Contacto{
    constructor(nombre, telefono){
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

class Agenda{
    constructor(tamanio){
        this.contactos = [];
        this.tamanio = tamanio;
    }

    agregarContacto(contactoNuevo){
        //verificar si el contacto existe
        if(this.existeContacto(contactoNuevo.nombre)=== true){
            console.log('El contacto ya existe, no lo agrego');
        }else      {
            
                //verificar si la agenda esta llena o tiene huecos vacíos
                if(this.agendaLlena() === false){
                    this.contactos.push(contactoNuevo);
                }
            }
        console.log(this.contactos);
    }

    existeContacto(nombre) {
        //es porque el contacto existe
        const contactoExistente = this.contactos.find((itemContacto)=> { return nombre === itemContacto.nombre
        });  
        console.log(contactoExistente);
        if(contactoExistente){
            console.log('el contacto existe');
            return true;
         } else{
                console.log('el contacto no existe');
                return false
            }
        
    }
//AGREGADO


mostrarContacto(){
    alert(JSON.stringify(this.contactos))

    }
    
    buscarContacto(nombre){
     let contactoConsultado = this.contactos.filter((itemContacto)=>{return itemContacto.nombre === nombre})
     alert(JSON.stringify(contactoConsultado))
     }
    



//FIN DE AGREGADO

    agendaLlena(){
        if(this.contactos.length === this.tamanio){
            console.log('La agenda esta llena')
            return true;
        }else{
            console.log('Hay espacio disponible')
            return false;
        }
    }

    eliminarContacto(nombre){
        let contactosFiltrados = this.contactos.filter((itemContacto)=>{return itemContacto.nombre != nombre})
        this.contactos = contactosFiltrados;
        console.log('elemento eliminado'+nombre);
        console.log(this.contactos);
    }


//AGREGADO 2
agendaLlena(){
    if(this.contactos.length === this.tamanio){
       alert('La agenda está llena');
        return true;
    }else{
        alert('Hay espacio disponible');
        return false;
}
}
agendaConEspacios(){
    if(this.contactos.length < this.tamanio){
      let espaciosDisponibles = this.tamanio - this.contactos.length
       alert('La agenda tiene espacio disponible: '+espaciosDisponibles );
        return true;
    }else{
        alert('La agenda está llena');
        return false;
}
}

mostrarContacto(){
alert(JSON.stringify(this.contactos))
}

modificarTamanioAgenda(nuevoTamanio){
    
    nuevoTamanio=parseInt(prompt("ingresar nuevo tamaño deseado para la agenda"))
    
    if(nuevoTamanio > this.contactos.length){
        this.tamanio = nuevoTamanio
        alert("Nuevo tamaño de agenda:" +this.tamanio)
    }else{
        alert("El tamaño de la agenda tiene que ser mayor a 0 y mayor o igual a la cantidad de contactos ya ingresados.")
    }
    
}

//FIN DE AGREGADO 2


}




//crear la agenda
let agendaTelefonica = new Agenda(10)
    console.log(agendaTelefonica)


//menú de opciones

do{




let opcion = parseInt(prompt(`Seleccione una opcion:
1- Agregar un contacto,
2- Consultar si el contacto existem
3- Listar los contactos, 
4 - Buscar un contacto,
5 - Eliminar un contacto, 
6 - Consultar si la agenda esta llena,
7 - Consultar si la agenda tiene huecos libres,
8-  Cambiar el tamaño de la agenda `))

switch (opcion){
    case 1: 
//1- Agregar un contacto,
//pedir nombre y teléfono
let nombre = prompt('Ingrese un nombre').toLocaleLowerCase();
let telefono = prompt('Ingrese un teléfono');
//crear el contacto
let nuevoContacto = new Contacto(nombre, telefono);
console.log(nuevoContacto);
//invocar a agregar contacto
agendaTelefonica.agregarContacto(nuevoContacto);
break;


case 2: 
//2- Consultar si el contacto existe
let nombreBuscado = prompt('Ingrese un nombre').toLocaleLowerCase();
agendaTelefonica.existeContacto(nombreBuscado);
break;

//AGREGADO 3
case 3:
    agendaTelefonica.mostrarContacto();
    // 3 - Listar los contactos,
    break;
    case 4:
    let numeroBuscado =prompt('Ingresar un nombre').toLowerCase();
    agendaTelefonica.buscarContacto(numeroBuscado);
    // 4 - Buscar un contacto,
    break;
//FIN AGREGADO 3
case 5: 
//5 - Eliminar un contacto, 
let contactoBorrar = prompt('Ingrese un nombre').toLocaleLowerCase();
agendaTelefonica.eliminarContacto(contactoBorrar);

break;

//AGREGADO 4
case 6:
        agendaTelefonica.agendaLlena()
        // 6 - Consultar si la agenda está llena.
        break;
        case 7:
        agendaTelefonica.agendaConEspacios()
        // 7 - Consultar si la agenda tiene huecos libres. 
        break;
        case 8:
        agendaTelefonica.modificarTamanioAgenda()
        // 8 - Cambiar el tamaño de la agenda.
        break;

// FIN AGREGADO 4
default: 
alert('Ingresó una opción incorrecta');

}
}while(confirm('¿Quiere realizar otra operación?'))