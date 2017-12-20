
class Toggable {
	constructor(el){
		this.el = el
		this.el.innerHTML = 'Off'
		this.activated = false
		this.el.addEventListener('click', this.onClick.bind(this))

	}
	onClick(ev){
		//Cambiar el estado interno
		this.activated = !this.activated
		//Llamar a toggleText
		this.toggleText()
	}
	toggleText(){
		//Cambiar el texto
		this.el.innerHTML = this.activated ? 'On' : 'Off'
	}
}

const button = document.getElementById('boton')

const miBoton = new Toggable(button)