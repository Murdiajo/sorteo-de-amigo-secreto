// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista para almacenar los nombres
let listaDeAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    // Agregar nombre a la lista
    listaDeAmigos.push(nombre);

    // Mostrar en la lista visible
    const lista = document.getElementById('listaAmigos');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);

    // Limpiar el campo de entrada
    input.value = '';
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('La lista está vacía. Agrega al menos un nombre antes de sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const nombreSorteado = listaDeAmigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
}
