// Estructuras de Datos Inmutables en JavaScript

// La inmutabilidad de los objetos es algo muy importante para la programación funcional.

// El operador === nos ayuda a comparar objetos, ejecutando la comparación no directamente a los datos del objeto sino, a la referencia del objeto.

// Cuando asignamos un objeto a otro estamos haciendo que ambos apunten a la misma referencia, por eso al modificar un objeto el otro también se verá afectado, porque ambos tienen la misma referencia de memoria.

// La inmutabilidad tiene por objetivo hacer que los parámetros de un objeto sean no modificables o inmutables

// Si quieres aprender más sobre inmutabilidad de objetos en JavaScript en la sección de Enlaces dejamos el link de una librería diseñada por Facebook que nos permite crear distintos tipos de objetos inmutables


console.clear()

classPersona{
  constructor( nombre, edad ){
    this.nombre = nombre
    this.edad = edad
  }
}
Persona.prototype.clone = function(){
  // Persona pudiera ser Object pero no es recomendable modificar el prototype de los tipos de objeto intrínsecos de JS
  returnObject.assign({},this)
}

const julio = new Persona('Julio',41)
const julian = julio.clone()

const cumpleanos = function( persona ){
  return persona.edad ++
}

console.log ( julio)
console.log ( cumpleanos(julian) )
console.log ( julio, julian )