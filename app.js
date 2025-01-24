/* 
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar". LISTO

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido. LISTO Y ADEMAS AGREGUÉ QUE NO PUEDAN INGRESAR NÚMEROS

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
*/


    let listaDeNombres = []; // Lista de nombres de amigos
    let añadirNombre = document.querySelector("#amigo"); // Obtiene el campo de texto


    function agregarAmigo() {
        let nombre = añadirNombre.value; // Obtiene el valor del campo de texto
        if (nombre === "" || /\d/.test(nombre)) { // Verifica si el campo de texto está vacío y que no contenga numeros
            alert("Por favor, ingrese un nombre válido."); // Muestra una alerta si el campo de texto está vacío
        } else {
            listaDeNombres.push(nombre); // Agrega el nombre a la lista
            añadirNombre.value = ""; // Limpia el campo de texto
        }
    }
console.log(listaDeNombres);

/*
  function visualizarLista() {
        let listaTotal = document.querySelector("#listaAmigos"); // Obtiene la lista
        listaTotal.innerHTML = "";
        for (let i = 0; i < listaDeNombres.length; i++) { // Recorre la lista de nombres
            listaTotal.innerHTML += `<li>${listaDeNombres[i]}</li>`; // Muestra los nombres en la lista
        }
    }

function sorteoAleatorio() {
    if (listaDeNombres.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    let amigoSecreto = listaDeNombres[Math.floor(Math.random() * listaDeNombres.length)]; // Selecciona un nombre aleatorio de la lista
    document.querySelector("#amigoSecreto").innerHTML = amigoSecreto; // Muestra el nombre en la página
}

document.querySelector("#añadirButton").onclick = agregarAmigo; // Asigna la función al botón de agregar
document.querySelector("#sortearButton").onclick = sorteoAleatorio; // Asigna la función al botón de sortear

/*
function SorteoAleatorio() {
    let amigoSecreto = listaDeNombres[Math.floor(Math.random() * listaDeNombres.length)]; // Selecciona un nombre aleatorio de la lista
    document.querySelector("#amigoSecreto").innerHTML = amigoSecreto; // Muestra el nombre en la página
}

/*
    function mostrarNombres() { // Muestra los nombres en la lista
        let listaTotal = document.querySelector("#listaAmigos"); // Obtiene la lista
        listaTotal.innerHTML = "";
        for (let i = 0; i < listaDeNombres.length; i++) { // Recorre la lista de nombres
            listaTotal.innerHTML += `<li>${listaDeNombres[i]}</li>`;
        }
    }
        */