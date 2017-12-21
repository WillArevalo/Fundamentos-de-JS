// Las Promesas son objetos y están asociadas con alguna tarea asincrónica.

// Existen tres estados internos de las Promesas:

//     Pending

//     Fullfiled

//     Rejected

// El constructor Promise tiene dos parámetros:

// const promise = new Promise(function (resolve, reject) { 

// )}
// //Promise es un constructor que recibe una función con dos argumentos.

function get(URL){
  return new Promise(function(resolve, reject){
    const xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function(){
      const DONE = 4
      const OK = 200
      if(this.readyState === DONE){
        if(this.status === OK){
           resolve(JSON.parse(this.responseText))
        } else {
           reject(new Error(`Se produjo un error al realizar el request : ${this.status}`))
        }
      } 
    }
    xhr.open('GET', URL);
    xhr.send(null);
  })
}
//obteniendo el error
function handleError(err){
  console.log(`Request Failed: ${err}`)
}

let luke
fetch('https://www.swapi.co/api/people/1')
  .then(response => response.json()) 
  .then((json) => {
    luke = json
    //Lo que return este then servira de entrada en el sgte then
    return fetch(luke.homeworld)
  })
  .then(response => response.json())
  .then((json) => {
    luke.homeworld = json
    
    console.log(`Request succeded`)
    console.log('luke', luke)
    console.log(`El nombre completo de luke es ${luke.name} y el pais natal de el es ${luke.homeworld.name}`)
  })
  .catch((err) => handleError(err))

  