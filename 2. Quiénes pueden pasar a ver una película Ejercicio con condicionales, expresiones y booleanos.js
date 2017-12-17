const starWars7 = 'Star Wars: El Despertar de la Fuerza'
//Edad minima para entrar a ver la pelicula
const pgStarWars7 = 13
//definiendo personas
const nameSacha = 'Sacha'
const ageSacha = 26

const nameSanti = 'Santi'
const ageSanti = 12
//Creando funcion que recibe nombre y edad y si va con un adulto
function canWatchStarWars7(name, age, isWithAdult = false) {
	//Si la edad de la persona es mayor o igual a el pg de la pelicula entonces puede ingresar
	if(age >= pgStarWars7){
		alert(`${name} puede pasar a ver ${starWars7}`)
	}else if(isWithAdult){
		alert(`${name} puedes pasar a ver ${starWars7}.
			Aunque su edad es ${age}, se encuentra acompañada/o por un adulto.`)
	}else{
		alert(`${name} no puedes entrar a ver ${starWars7} debido a que tienes ${age} años y para entrar debes tener ${pgStarWars7}, 
			te faltan ${pgStarWars7 - age} año(s) para ver esta pelicula vuelve cuando seas viejo :'v`)
	}
}
//Llamamos la funcion e ingresamo parametros
canWatchStarWars7(nameSacha, ageSacha)
canWatchStarWars7(nameSanti, ageSanti, true)

//
//Con arrow functions
//

const starWars7 = 'Star Wars: El Despertar de la Fuerza'
const pgStarWars7 = 13

const nameElliot = 'Elliot Alderson'
let ageElliot = 24

const nameDarlene = 'Darlene Alderson'
let ageDarlene = 12

const nameAngela = 'Angela Moss'
let ageAngela = 11

const canWatchStarWars = (name, age, isWithAdult = false) => {
  if (age >= 13) {
    alert(`${name} puede pasar a ver ${starWars7}.`)
  } elseif (isWithAdult) {
    alert(`${name} puede pasar a ver ${starWars7} porque está acompañada/o por un adulto.`)    
  } else {
    alert(`${name} no puede pasar a ver ${starWars7} porque tiene ${age} y debe tener ${pgStarWars7}.`)
  }
}

canWatchStarWars(nameElliot, ageElliot)
canWatchStarWars(nameDarlene, ageDarlene, true)
canWatchStarWars(nameAngela, ageAngela)