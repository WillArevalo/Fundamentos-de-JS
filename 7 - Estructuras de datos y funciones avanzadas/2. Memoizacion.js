let contador = 0
function fibonacci(num, memoria = {}){
	contador++
	console.log(`Numero de veces utilizada la funcion fibonacci: ${contador}`)
	//si ya se ha llamado antes este proceso se retornara
	if(memoria[num]) return memoria[num]
	//Caso base
	if(num == 1) return 0
	if(num == 2) return 1
	

	//Casos
	return memoria[num] = fibonacci(num - 1, memoria) + fibonacci(num - 2, memoria)
}
fibonacci(20)