//Contexto this o self

class Persona{
	constructor(nombre, amigos = []){
		this.nombre = nombre
		this.amigos = amigos
	}

	listarAmigos(){
		//Se renombra this desde el anterior para tener la variable guardada, tambien puede ser self
		const _this = this
		this.amigos.forEach(function(amigo){
			console.log(`Hola, mi nombre es ${_this.nombre} y soy amigo de ${amigo}`)
		})
	}
}

const will = new Persona("Will", ["Almeciga", "Castro", "Pepe"])

//Otra forma es setear(bind-enlazar) el contexto fuera del bloque donde queremos hacer referencia al this

class Persona{
	constructor(nombre, amigos = []){
		this.nombre = nombre
		this.amigos = amigos
	}

	listarAmigos(){
		this.amigos.forEach(function(amigo){
			console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
		}.bind(this))
	}
}

const will = new Persona("Will", ["Almeciga", "Castro", "Pepe"])

//Con arrow functions el bloque donde esta la arrow function tomara el contexto de fuera de ella
class Persona{
	constructor(nombre, amigos = []){
		this.nombre = nombre
		this.amigos = amigos
	}

	listarAmigos(){
		//al ser una arrow function toma el contexto(this de mas arriba)
		this.amigos.forEach((amigo) => {
			console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
		})
	}
}

const will = new Persona("Will", ["Almeciga", "Castro", "Pepe"])
