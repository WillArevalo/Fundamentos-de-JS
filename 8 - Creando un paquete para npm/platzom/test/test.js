const expect = require('chai').expect
const platzon = require('..').default

describe('#platzom',function(){

	it('Si la palabra termina con "ar", se le quitan esas dos ultimas palabras', function(){
		const translation = platzon("Programar")
		expect(translation).to.equal("Program")
	})
	it('Si la palabra inicia con Z, se le añade  "pe" al final', function(){
		const translation = platzon("Zorro")
		const translation2 = platzon("Zarpar")

		expect(translation).to.equal("Zorrope")
		expect(translation2).to.equal("Zarppe")
	})	
	it('Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión', function(){
		const translation = platzon("abecedario")
		expect(translation).to.equal("abece-dario")		
	})	
	it('Si la palabra original es un palíndromo,  ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas', function(){
		const translation = platzon("sometemos")
		expect(translation).to.equal("SoMeTeMoS")				
	})
})