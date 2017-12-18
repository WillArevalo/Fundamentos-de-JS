//Prototipos son lo mas similar a las clases
//Hallar la hipotenusa de un triangulo rectangulo a partir de la tangente
// d = sqrt(x^(2)+y^(2))
/*function Punto(x,y){
	//constructor
	this.x = x
	this.y = y
}
//Metodos
Punto.prototype.moverEnX = function moverEnX(x) {
	// Sume en x
	this.x += x
}
Punto.prototype.moverEnY = function moverEnY(y) {
	// Sume en y
	this.y += y
}
Punto.prototype.distancia = function distancia(p){
	//Se halla la distancia teniendo un punto como referencia y dandole otro como paremetro
	//p1.distancia(p)
	//Algo un poco mas complejo pero se entiende si se ven los ejemplos anteriores
	return Math.sqrt(Math.pow(this.x - p.x, 2) + Math.pow(this.y - p.y, 2)).toFixed(2)
}*/

const Punto = {
	//constructor
	init: function init(x,y){
		let obj = Object.create(this)
		obj.x = x
		obj.y = y
		return obj
	},
	moverEnX: function moverEnX(x){
		this.x += x
	},
	moverEnY: function moverEnY(y){
		this.y += y
	},
	distancia: function distancia(p){
		return Math.sqrt(Math.pow(this.x - p.x, 2) + Math.pow(this.y - p.y, 2)).toFixed(2)
	}
}

const p1 = Punto.init(0,4)
const p2 = Punto.init(3,0)

console.log(p1.distancia(p2))
console.log(p2.distancia({x:20, y:-7}))
p1.moverEnX(10)
console.log(p1)
p2.moverEnY(20)
console.log(p2)