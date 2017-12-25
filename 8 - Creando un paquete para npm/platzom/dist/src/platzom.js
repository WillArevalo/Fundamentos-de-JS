'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {
	//Si la palabra original es un palindromo 
	//ninguna regla anterior cuenta y se devuelve
	// la misma palabra intercalando matúsculas y minúsculas
	//Hacemos un arrow function para divir la palabra por caracteres
	//que la reversee y la una nuevamente
	//para posteriormente examinarla contra la original
	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};

	function minMay(str) {
		// funcion que returna minus y mayus intercaladas
		var length = str.length;
		translation = '';
		var capitalize = true;
		for (var i = 0; i < length; i++) {
			var char = str.charAt(i);
			translation += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}
		return translation;
	}

	if (str.toLowerCase() == reverse(str)) {
		return minMay(str);
	}

	// funcion para convertir strings
	var translation = str;
	//Si la palabra termina en "ar" se le quita esos dos caracteres
	if (str.toLowerCase().endsWith('ar')) {
		//Cortamos
		translation = str.slice(0, -2);
	}
	//Si la palabra termina con z, se le añade "pe" al final
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe';
	}
	//Si la palabra traducida tiene diez o mas letras 
	//se debe partir a la mitad y unir con un guion
	length = translation.length;
	if (length >= 10) {
		var firstHalf = translation.slice(0, Math.round(length / 2));
		var secondHalf = translation.slice(translation.length / 2);
		translation = firstHalf + '-' + secondHalf;
	}

	return translation;
}