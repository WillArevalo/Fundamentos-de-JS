//OPERACIONES CON ARRAYS

//spread operator es eso '...numbers' para recojer todos los parametros que deseemos
function suma(...numbers){
	console.log(numbers)
}

suma( 4, 8, 12, 8954, 7 )
suma(2)
suma()

//Funcion para calcular la suma de elementos
function suma(...numbers){
	let acumulado = 0
	for (let i = 0; i < numbers.length; i++){
		acumulado += numbers[i]
	}
	return acumulado
}
suma( 4, 8, 12, 8954, 7 )
suma(4,4)

//Utilizando reduce en el array
function suma(...numbers){
	//reduce se define con una funcion ya que el pasa un acumulador por cada elemento hasta terminar,
	//Se define el acumulador, el numero, y en que comienzo el acumulador
	return numbers.reduce(function(acumulador, numero){
		acumulador += numero
		return acumulador
	},0)
}
suma( 4, 8, 12, 8954, 7 )
suma(4,4)

//Funcion que nos devolvera el doble de esos numeros
function dobles(...numeros) {
	const resultado = []
	for (let i=0; i < numeros.length; i++){
		resultado.push(numeros[i] * 2)
	}
	return resultado
}
dobles(2,4,8,16)

//Usando map en los arrays
function dobles(...numeros){
	return numeros.map(function(numero){return numero * 2})
}

dobles(2,4,8,16)

//con arrow functions
const dobles = (...numeros) => numeros.map(numero => numero * 2)


dobles(2,4,8,16)

//funcion para encontrar los pares
function pares(...numeros){
	let pares = [], impares = []
	for (var i = 0; i < numeros.length; i++) {
		numeros[i] % 2 == 0 ? pares += numeros[i]+',' : impares += numeros[i]+ ','
	}
	return `Los pares son ${pares}, los impares son ${impares}`
}
pares(2,3,4,5,6,7)

//utilizando filter

function pares(...numeros){ 
	//filtra en un array
	return numeros.filter(function(numero){
		return numero % 2 == 0
	})
}
pares(2,3,4,5,6,7)


//utilizando filter con arrow functions
const pares = (...numeros) => numeros.filter(numeros = (numero) => numero % 2 == 0)

pares(2,3,4,5,6,7)