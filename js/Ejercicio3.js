/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
propiedades de alto y ancho, mas los métodos necesarios para modiﬁcar y
mostrar sus propiedades, calcular el perímetro y el área*/

//Área del rectángulo es A = h * b
//Perímetro del rectángulo es P = 2 L + 2 A

class Rectangulo {
    constructor (alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }

//creamos get y set

getAlto(){
    return this.alto;
}
 
setAlto(newalto){
    this.alto = newalto;
 }

 getAncho(){
    return this.alto;
}
 
setAncho(newancho){
    this.ancho = newancho;
 }

 //creamos los métodos
 calcArea(){
    let area = this.alto * this.ancho;
    document.write('<h2> El area del rectangulo es: ' + area +'cm </h2>')
 }

calcPerimetro(){
    let perimetro = 2 *(this.alto + this.ancho) ; 
    document.write('<h2> El perímetro del rectangulo es: ' + perimetro +'cm </h2>')
}

imprimeDatos(){
    document.write(`<h5>El rectángulo creado tiene las siguientes características: <h5>
    <ol>
    <li>Alto:${this.alto}</li> 
    <li>Ancho: ${this.ancho}</li>
    </ol>
    `)}

  }


  //instanciar un objeto 

let rectangulo1 = new Rectangulo (
    ancho= parseFloat(prompt('Ingresá el ancho deseado. Debe ser un número positivo')),
    alto= parseInt(prompt('Ingresá el alto deseado. Debe ser un número positivo')),
    
)
 
rectangulo1.calcArea()
rectangulo1.calcPerimetro()
rectangulo1.imprimeDatos()