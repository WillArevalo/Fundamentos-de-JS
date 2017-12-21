//Haremos un callback a un api de starwars
//swapi.co/
//ex. swapi.co/api/people/1

//Problema de callbacks dentro de callbacks
//ejercicio realizado en https://codepen.io/WillFap/pen/GyjZZK

function get(URL, callback){
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function(){
    const DONE = 4
    const OK = 200
    if(this.readyState === DONE){
      if(this.status === OK){
         callback(null, JSON.parse(this.responseText))
      } else {
         callback(new Error(`Se produjo un error al realizar el request : ${this.status}`))
      }
    } 
  }
  xhr.open('GET', URL);
  xhr.send(null);
}
//obteniendo el error
function handleError(err){
  console.log(`Request Failed: ${err}`)
}
get('https://www.swapi.co/api/people/1', function onResponse(err, luke){
  if(err) return handleError(err)
  
  //Accediendo al planeta desde la funcion
  get(luke.homeworld, function onHomeworldResponse(err, homeworld){
    if(err) return handleError(err)
    //Seteamos el verdadero nombre del planeta
    luke.homeworld = homeworld
    
    console.log(`Request succeded`)
    console.log('luke', luke)
    console.log(`El nombre completo de luke es ${luke.name} y el pais natal de el es ${luke.homeworld.name}`)
  })
})