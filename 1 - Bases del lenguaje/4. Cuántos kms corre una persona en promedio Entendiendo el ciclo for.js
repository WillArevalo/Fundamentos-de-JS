const nombre = 'William'
const dias = [
	"lunes",
	"martes",
	"miercoles",
	"jueves",
	"viernes",
	"sabado",
	"domingo"
]

function correr(){
	const min = 5
	const max = 15
	return Math.round(Math.random() * (max - min) + min)
}

let totalKms = 0
for (let i = 0; i < dias.length; i++){
	const kms = correr()
	totalKms += kms
	console.log(`El día ${dias[i]} ${nombre} se corrio ${kms}Kms`)
}
const promedioKms = totalKms / dias.length
console.log(`En total ${nombre} corrio ${totalKms} Kms en la semana, y en promedio se corrio ${promedioKms.toFixed(2)}Kms al día`)
//Cuanto corre una persona en esos 7 dias
