// Para decirle a JavaScript que nuestra función es un generador debemos indicarlo con un asterisco de la siguiente forma:
// function(asterisco)

// Si creamos un generador debemos colocar la palabra clave yield la cual indica que cuando llamemos la función después de la primera vez, esta iniciará en la línea después de yield.

function* fibonacci(){
	let a = 0, b = 1
	//Yield hace que almacene la variable despues del resultado para retomarlo en su misma
	//funcion luego, en realidad es como un break que returna un resultado, 
	// lo entiendo asi dentro de este ciclo while(true) nunca iria a parar sin un break,
	//Pero con yield se 
	while (true){
		let f = a
		a = b
		b = f + a
		let reset = yield f
		if(reset) a = 0, b = 1
	}
}
//entonces podemos iterar con next, fibo.next()

let fibo = fibonacci()

fibo.next()
fibo.next()
fibo.next()
fibo.next()
fibo.next()
//Con true se reinician los valores
fibo.next(true)
