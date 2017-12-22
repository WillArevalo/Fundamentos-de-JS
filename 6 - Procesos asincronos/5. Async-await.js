//obteniendo el error
function handleError(err){
  console.log(`Request Failed: ${err}`)
}

async function getLuke(){
  //res es una promesa, es contraintuitivo, pero con await lo que hara js
  //es esperar a que se ejecute la promesa y lo que resuelva lo guarde en res
  try{
    const response = await fetch('https://www.swapi.co/api/people/1')
    const luke = await response.json()
    const responseHomeWorld = await fetch(luke.homeworld)
    luke.homeworld = await responseHomeWorld.json()
    console.log("Response Succeded")
    console.log(luke)
    console.log(`El nombre completo de luke es ${luke.name} y el pais natal de el es ${luke.homeworld.name}`)
  } catch(err){handleError(err)}
  
}
getLuke()
