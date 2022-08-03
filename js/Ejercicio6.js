/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
● ISBN
● Título
● Autor
● Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad.
Crear el método mostrarLibro() para mostrar la información relativa al libro con el
siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/
//creamos la clase

class Libro{
    constructor(isbn, titulo, autor, nrodepaginas){
        this.isbn= isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.nrodepaginas = nrodepaginas;
    }


//creamos get y set

        getIsbn(){
            return this.isbn;
        }
         
        setIsbn(newisbn){
            this.isbn = newisbn;
         }

         getTitulo(){
            return this.titulo;
        }
         
        setTitulo(newtitulo){
            this.titulo = newtitulo;
         }

         getAutor(){
            return this.autor;
        }
         
        setAutor(newautor){
            this.autor = newautor;
         }

         getNrodepaginas(){
            return this.nrodepaginas;
        }
         
        setNrodepaginas(newnrodepaginas){
            this.nrodepaginas = newnrodepaginas;
         }

 //creamos los métodos
  mostrarLibro(){
    document.write(`<h5>El libro "${this.titulo}" cuyo ISBN es ${this.isbn} que fuera creado por el autor ${this.autor} tiene ${this.nrodepaginas} páginas </h5>`)
   }      

 }



//instanciar un objeto 

let libro1 = new Libro (
    isbn =prompt("Ingrese el código ISBN de su libro - Ejemplo sugerido: 978 - 950 - 0000 - 00 - 0"),
    titulo=prompt("Ingrese el título del primer libro -  Ejemplo sugerido: Alvin Maker y el Hacedor"),
    autor=prompt("Ingrese autor - Ejemplo sugerido: Orson Scott Card"),
    nrodepaginas= parseInt(prompt("Ingrese el número de páginas - El libro del ejemplo sugerido tiene: 350"))
    )

libro1.mostrarLibro()    

let libro2 = new Libro (
    isbn =prompt("Ingrese el código ISBN de su libro - Ejemplo sugerido: 978-950-547-000-6"),
    titulo=prompt("Ingrese el título del libro dos -  Ejemplo sugerido: Crónicas Marcianas-"),
    autor=prompt("Ingrese autor - Ejemplo sugerido: Ray Bradbury"),
    nrodepaginas= parseInt(prompt("Ingrese el número de páginas - El libro del ejemplo sugerido tiene: 264"))
    )

libro2.mostrarLibro()  



if(libro1.nrodepaginas > libro2.nrodepaginas){
    document.write(libro1.titulo +'  tiene más páginas')
}else{
    document.write(libro2.titulo +'  tiene más páginas')
}