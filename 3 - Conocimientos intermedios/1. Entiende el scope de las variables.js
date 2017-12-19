// De esta forma recibe el scope global
var nombre = "William"

function saludar(){
	console.log(`Hola ${nombre}`)
}

saludar()

//De esta recibe el parametro y solo se maneja dentro de la funcion
var nombre = "William"

function saludar(nombre){
	console.log(`Hola ${nombre}`)
}

saludar("Fabian")
console.log(`La variable nombre tiene el valor ${nombre}`)

//hoisting es cuando js hace que aunque la variable declara este dentro de un condicional o ciclo
//dentro de la funcion, es como si esa variable estuviese declara al comienzo
//de la funcion, y solo se maneja dentro de la funcion
var nombre = "William"

function saludar(){
	if(true){
		var nombre = "Santiago"
	}
	console.log(`Hola ${nombre}`)
}

saludar()
console.log(`La variable nombre tiene el valor ${nombre}`)

//para eso se introdujo let y const, con let solo permanece dentro de su scope
//mientras que con const se declara solo una vez al momento de ejecutar