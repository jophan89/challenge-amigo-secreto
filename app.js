let amigos = [];

function agregarAmigo() {
	let amigo = document.getElementById("amigo").value;
	if (amigo != "") {
		amigos.push(amigo);
		mostrarAmigos();
	} else {
		alert("Ingrese un nombre valido.");
	}
	document.getElementById("amigo").value = "";
}

function sortearAmigo() {
	if (amigos.length == 0) {
		alert("No hay amigos para sortear.");
		return;
	}
	let resultado = document.querySelector("#resultado");
	let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
	resultado.innerHTML = `${amigoSorteado}`;
}

function mostrarAmigos() {
	let listaAmigos = document.querySelector("#listaAmigos");
	listaAmigos.innerHTML = "";
	for (let i = 0; i < amigos.length; i++) {
		let amigo = amigos[i];
		let lista = document.createElement("li");
		lista.textContent = amigo;
		listaAmigos.appendChild(lista);
	}
}