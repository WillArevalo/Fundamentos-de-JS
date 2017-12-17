const nacimiento = new Date(1995, 2, 21)

const hoy = new Date()
//En milisegundos
const tiempo = hoy - nacimiento 
//En segundos
const tiempoSegundos = tiempo / 1000
//En minutos
const tiempoMin = tiempoSegundos / 60
//En horas
const tiempoHoras = tiempoMin / 60
//imprimir en consola
console.log(`En horas has vivido ${tiempoHoras}`)
//Que dia cae el proximo cumpleaños
const proximo = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
//creamos un array para que nos retorne el dia en español
const dias = [
	"Domingo",
	"Lunes",
	"Martes",
	"Miércoles",
	"Jueves",
	"Viernes",
	"Sábado"
]

console.log("Tu cumpleaños este año es un dia:")
console.log(dias[proximo.getDay()])
