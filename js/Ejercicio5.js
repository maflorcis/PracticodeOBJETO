/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
generación pertenece la persona creada y cual es el rasgo característico de esta
generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.*/

class Persona{
    constructor(nombre, edad, sexo, peso, altura, anoNacimiento, dni){
        this.nombre= nombre;
        this.edad = edad;
        this.sexo=sexo;
        this.peso= peso;
        this.altura= altura;
        this.anoNacimiento= anoNacimiento;
        this.dni = dni;
    }

//creamos get y set

getNombre(){
    return this.nombre;
}
 
setNombre(newnombre){
    this.nombre = newnombre;
 }

 getEdad(){
    return this.edad;
}
 
setEdad(newedad){
    this.edad = newedad;
 }
 
 
 getSexo(){
    return this.sexo;
}
 
setSexo(newsexo){
    this.sexo = newsexo;
 }

 getPeso(){
    return this.peso;
}
 
setPeso(newpeso){
    this.peso = newpeso;
 }

 getAltura(){
    return this.altura;
}
 
setAltura(newaltura){
    this.altura = newaltura;
 }

 getanoNacimiento(){
    return this.anoNacimiento;
}
 
setNombre(anoNacimiento){
    this.anoNacimiento = anoNacimiento;

 }

 getDNI(){
    return this.dni;
}
 
setDNI(newdni){
    this.dni = newdni;
 }

 //creamos los métodos

mostrarGeneracion(){
    if(this.anoNacimiento>=1994 && this.anoNacimiento<=2010){
        document.write('<p> Tu generacion es la Z y tu rasgo característico es la Irreverencia </p>')
        }else if(this.anoNacimiento>=1981 && this.anoNacimiento<=1993){
          document.write("<p> Tu generacion es la Y y tu rasgo característico es la Frustración </p>")
        }else if(this.anoNacimiento>=1969 && this.anoNacimiento<=1980){
            document.write("<p> Tu generacion es la X y tu rasgo característico es la Obsesión por el éxito </p>")
        }else if(this.anoNacimiento>=1949 && this.anoNacimiento<=1968){
            document.write("<p> Tu generacion es la Baby Boom y tu rasgo característico es la Ambición </p>")
        }else if(this.anoNacimiento>=1930 && this.anoNacimiento<=1948){
          document.write("<p> Tu generación se llama Silent Generation o Niños de la posguerra y tu rasgo característico es la Austeridad </p>")
        }else{
            document.write("<p>Ingresaste un año de nacimiento sin generación determinada </p>");
        }
    
    }

    esMayorDeEdad(){
        if(this.edad >18){
            document.write('<p> Sos mayor de edad </p>')
        }else{
            document.write('<p> No sos mayor de edad </p>')
        }
    }

    mostrarDatos(){
        document.write(`<h5>La persona ingresada tiene las siguientes características: <h5>
        <ol>
        <li>Nombre:${this.nombre}</li> 
        <li>Edad: ${this.edad}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>Año de nacimiento: ${this.anoNacimiento}</li>
        </ol>
        `)
    }

  generaDNI(){
    this.dni = Math.round(Math.random() * (99999999 - 1000000) + 1000000);
    document.write('<h3> Tu número de DNI asignado es: ' + this.dni)
  }

    }



//instanciar un objeto 

let Persona1 = new Persona (
    nombre= prompt('Ingresá tu nombre'),
    edad= parseInt(prompt('Ingresá tu edad en números')),
    sexo= prompt('Ingresá tu sexo eligiendo entre H/M'),
    peso= parseFloat(prompt('Ingresá tu peso en kilogramos')),
    altura= parseInt(prompt('Ingresá tu estatura en cm')),
    anoNacimiento=parseInt(prompt('Ingresá tu año de nacimiento')),

)


Persona1.mostrarGeneracion()
Persona1.esMayorDeEdad()
Persona1.mostrarDatos()
Persona1.generaDNI()

/*nombre=prompt("Ingrese Nombre"),
    edad=parseInt(prompt("Ingrese su edad")),
    DNI= parseInt(prompt("Ingrese su DNI")),
    sexo=prompt("Ingrese H/M"),
    peso= parseInt(prompt("Ingrese su peso")),
    altura= parseInt(prompt("Ingrese su estatura en cm")),
    anoNacimiento= parseInt(prompt("Ingrese su año de nacimiento")),*/


    