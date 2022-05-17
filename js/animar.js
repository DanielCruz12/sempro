let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
	let scrollTop = document.documentElement.scrollTop
	for (var i = 0; i < animado.length; i++) {
		let alturaAnimado = animado[i].offsetTop;
		if (alturaAnimado - 430 < scrollTop) {
			animado[i].style.opacity = 1;
			animado[i].classList.add("mostrarArriba");
			animado[i].classList.add("mostrarDerecha");
		}
	 } 
}
window.addEventListener("scroll", mostrarScroll);