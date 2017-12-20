//El objeto global es window
function saludar(veces){
	for (let i = 0; i < veces; i++){
		console.log(`Hola ${this.nombre} ${this.apellido}`)
	}
}
saludar(3)
window.nombre = "Will"
window.apellido = "Arevalo"
saludar(3)


//Tomando como contexto algo, y luego el argumento
const will = {
	nombre: 'Will',
	apellido: 'Arevalo'
}
function saludar(veces){
	for (let i = 0; i < veces; i++){
		console.log(`Hola ${this.nombre} ${this.apellido}`)
	}
}
//Con call se llama el contexto y luego los parametros de la funcion 
saludar.call(will,3)
//Con apply  es similar pero los parametros se llaman en un array
saludar.apply(will, [3])