// Los callbacks de JavaScript

// JavaScript cuando ejecuta código lo hace de manera síncrona, pero una forma que tiene de ejecutar código asíncrono es con las funciones llamadas “Callbacks”
// Éstas se ejecutan y nos devuelven el proceso, generalmente después de algún evento de tiempo, al completarse un request o al terminar de leer un archivo.

// Recuerda:
// -El tiempo que le demos a los procesos es un tiempo mínimo. JavaScript puede no respetarlos, todo depende del peso de las tareas que tengamos en la cola de ejecución.
// -Para evitar los cuellos de botella en los procesos y delega tareas pesadas y con mucho tiempo de ejecución a otros microservicios.


//setTimeout recibe la funcion a ejecutar y el tiempo que se tardara antes de ejecutarla

//haciendo un cuello de botella
setTimeout(function callback() {
	console.log("Ya paso un segundo")
	return console.log("middle-1")
}, 1000)

for(let i = 0; i < 999999999; i++) ;

console.log("Hola :)")
