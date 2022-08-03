/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar
las propiedades código, nombre y precio, además del método imprime datos, el
cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores
de los tres objetos instanciados.*/

/* INTENTO 1 - no sabíamos imprimir objetos
class Producto{
    constructor(codigo, nombre, precio){
        this.codigo= codigo;
        this.nombre= nombre;
        this.precio= precio;

    }

    imprimeDatos(){

        document.write(`<ul>
    <li>Codigo: ${this.codigo} <li>
    <li>Nombre: ${this.nombre} <li>
    <li>Precio: ${this.precio} <li>
    
    </ul>`)
    }

}

// crear un usuario, instanciar 
let galleta = new Producto('500ABC', 'Galletas', 50);
let fideo = new Producto('500ABT', 'Fideos', 80);
let alfajor = new Producto('500ABG', 'Alfajor', 80);


// crear un array 

let canasta = [galleta, fideo, alfajor];


document.write(JSON.stringify(canasta, null, 3));

*/

// RESULTADO JUNTADA CON MAURI 

let inventario = [];
class Producto{ 

    constructor(codigo, nombre, precio){
        this.codigo = codigo;   
        this.nombre = nombre;
        this.precio = precio;
      }
      añadirEnInventario(){
        inventario.push("Codigo: "+this.codigo+" "+"Nombre: "+this.nombre+" "+"Precio $ "+this.precio) 

      }
  

      imprimeDatos(){
        document.write(`<h5>El ingresado tiene las siguientes características: <h5>
        <ol>
        <li>Código:${this.codigo}</li> 
        <li>Nombre: ${this.nombre}</li>
        <li>Precio: ${this.precio}</li>
        </ol>
        `)}
    }


alert ("Bienvenido al sistema registrador de productos.")

let mercaderia1 = new Producto (
  codigo=prompt("Ingrese código de producto"),
  nombre=prompt("Ingrese nombre de producto"),
  precio=parseFloat(prompt("ingrese precio del producto"))
  )
mercaderia1.añadirEnInventario()

let mercaderia2 = new Producto (
  codigo=prompt("Ingrese código de producto"),
  nombre=prompt("Ingrese nombre de producto"),
  precio=parseFloat(prompt("ingrese precio del producto"))
  )

mercaderia2.añadirEnInventario()

let mercaderia3 = new Producto (
  codigo=prompt("Ingrese código de producto"),
  nombre=prompt("Ingrese nombre de producto"),
  precio=parseFloat(prompt("ingrese precio del producto"))
  )

mercaderia3.añadirEnInventario()

mercaderia1.imprimeDatos()
mercaderia2.imprimeDatos()
mercaderia3.imprimeDatos()

document.write("<h5> Productos cargados en el sistema: </h5> <br>")
document.write(`<ul>`);
for(let indice=0; indice <inventario.length; indice++){
document.write(`<ul><li>${inventario[indice]}</li></ul>`)};
document.write(`</ul`);
