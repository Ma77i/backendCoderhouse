class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = libros,
        this.mascotas = mascotas
    }

    getData(){
        return `Nombre: ${this.nombre} ${this.apellido}, Mascotas: ${this.mascotas.map(pet=>pet)}, Libros: ${this.libros.map(name=>name.nombre)}`
    }


    getFullName() {
        return `${this.apellido}, ${this.nombre}`
    }


    //void. //Recibe un nombre de mascota y lo agrega al array de mascotas.
    addMascota(mascota){
        return this.mascotas.push(mascota)
    } 


    //Number. //Retorna la cantidad de mascotas que tiene el usuario.
    countMascotas(){
        return this.mascotas.length
    } 


    //String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
    addBook(nombre, autor){
        this.libros.push({nombre, autor})
    }


    // String[]. Retorna un array con sólo los nombres del array de libros del usuario.
    getBookNames(){
        return this.libros.map(item => item.nombre);
    }

}

const user = new Usuario (
    "Mattias", 
    "Silva", 
    [{nombre: 'Rebelion en la granja', autor: 'George Orwell'}, {nombre: 'The catcher in the rye', autor: 'J. D. Salinger'}],
    ["Pacho", "Plantas"]
    )

    
console.log(user)
console.log(user.getFullName())
console.log(user.addMascota("perro"))
console.log(user.countMascotas())
console.log(user.addBook("1984", "George Orwell"))
console.log(user.getBookNames())
console.log(user.getData())



/* DOM */

let root = document.querySelector("#root")

root.innerHTML = `<p>User: ${user.getFullName()}</p>
<p>Mascotas: ${user.countMascotas().length}</p>
<p>Libros: ${user.getBookNames()}</p>`









