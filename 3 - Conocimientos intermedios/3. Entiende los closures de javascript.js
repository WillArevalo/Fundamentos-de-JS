function saludarGomez(nombre){
	console.log(`Hola ${nombre} Gomez`)
}
function saludarPerez(nombre){
	console.log(`Hola ${nombre} Perez`)
}

saludarGomez("Pedro")
saludarGomez("Laura")

saludarPerez("Lina")
saludarPerez("Paolo")


//--------------------o-------------------//
//Clousers

function saludarFamilia(apellido){
	return function saludarMiembrodeFamilia(nombre){
		console.log(`Hola ${nombre} ${apellido}`)
	}
}

const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")

saludarGomez("Pedro")
saludarGomez("Laura")

saludarPerez("Lina")
saludarPerez("Paolo")

//Ejercicio de prefijos
const makePrefixer = function (prefijo) {
	return function(palabra) {
		 console.log(`${prefijo}${palabra}`) 
	}
}

const prefijoSuper = makePrefixer("super")
const prefijoIn = makePrefixer("In")
prefijoSuper("bueno")
prefijoSuper("malo")
prefijoSuper("bruto")
prefijoSuper("vista")
prefijoIn("comodo")

//Otro ejemplo podria ser, hacer generadores, mira el siguiente ejemplo

functionsumar(x){
  returnfunction(y){
    return x + y;
  };
}

//Por medio de esa funcion podemos generar mas funciones que recuerden la variable ‘x’ formandose un closure

var suma10 = sumar(10);
var suma20 = sumar(20);
console.log(suma10(2));  // 12
console.log(suma20(2));  // 22
