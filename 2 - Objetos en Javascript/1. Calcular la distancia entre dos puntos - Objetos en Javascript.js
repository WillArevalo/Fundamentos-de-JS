//Hallar la hipotenusa de un triangulo rectangulo a partir de la tangente
// d = sqrt(x^(2)+y^(2))

const p1 = {
	x: 0,
	y: 4
}

const p2 = {
	x: 3,
	y: 0
}

function distancia(p1, p2) {
	// Hallando la distancia
	const x = p1.x - p2.x
	const y = p1.y - p2.y

	return Math.sqrt(Math.pow(x,2)+Math.pow(y,2))

}
console.log(distancia(p1,p2))
console.log(distancia(p1, {x:20, y:-7}))