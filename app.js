/* 
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
*/

document.addEventListener("DOMContentLoaded", function() {
    let listaDeNombres = []; // Lista de nombres de amigos
    let addName = document.querySelector("#addName"); // Obtiene el campo de texto

    function showNames() { // Muestra los nombres en la lista
        let list = document.querySelector("#list"); // Obtiene la lista
        list.innerHTML = "";
        for (let i = 0; i < listaDeNombres.length; i++) { // Recorre la lista de nombres
            list.innerHTML += `<li>${listaDeNombres[i]}</li>`;
        }
    }

    function agregarAmigo() {
        let name = addName.value; // Obtiene el valor del campo de texto
        if (name === "") {
            alert("Por favor, ingrese un nombre válido."); // Muestra una alerta si el campo de texto está vacío
        } else {
            listOfNames.push(name); // Agrega el nombre a la lista
            showNames(); // Muestra la lista actualizada
            addName.value = ""; // Limpia el campo de texto
        }
    }

    document.querySelector("button").onclick = agregarAmigo; // Asigna la función al botón
});

  