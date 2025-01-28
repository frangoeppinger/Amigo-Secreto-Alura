/*
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar". LISTO

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido. LISTO Y ADEMAS AGREGUÉ QUE NO PUEDAN INGRESAR NÚMEROS

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

*/


    let listaDeNombres = []; // Lista de nombres de amigos
    let añadirNombre = document.querySelector("#amigo"); // Obtiene el campo de texto

    function visualizarLista() {
        let listaTotal = document.getElementById('listaAmigos'); // Obtiene la lista
        listaTotal.innerHTML = ""; // Limpia la lista
        listaDeNombres.forEach(nombre => { // Recorre la lista de nombres
            let li = document.createElement('li'); // Crea un elemento li
            li.textContent = nombre; // Agrega el nombre al elemento li
            listaTotal.appendChild(li); // Agrega el elemento li a la lista
        });
        
    }

    function agregarAmigo() {
        let nombre = añadirNombre.value; // Obtiene el valor del campo de texto
        if (nombre === "" || /\d/.test(nombre)) { // Verifica si el campo de texto está vacío y que no contenga numeros
            alert("Por favor, ingrese un nombre válido."); // Muestra una alerta si el campo de texto está vacío
        } else {
            listaDeNombres.push(nombre); // Agrega el nombre a la lista
            visualizarLista(); // Muestra los nombres en la lista   
            añadirNombre.value = ""; // Limpia el campo de texto
        }
    }
console.log(listaDeNombres);
 
function sortearAmigo() {
    if (listaDeNombres.length < 2) { // Verifica si hay al menos 2 nombres en la lista
        alert("No hay nombres suficientes en la lista para sortear."); // Muestra una alerta si no hay suficientes nombres
        return; // Finaliza la función
    }
    let amigoAleatorio = listaDeNombres[Math.floor(Math.random() * listaDeNombres.length)]; // Selecciona un nombre aleatorio de la lista
    mostrarResultado(amigoAleatorio); // Muestra el nombre sorteado

    function mostrarResultado(amigoAleatorio) { // Muestra el nombre sorteado
        let resultado = document.getElementById('resultado'); // Obtiene el elemento resultado
        resultado.innerHTML = ""; // Limpia el contenido del elemento resultado
        let li = document.createElement('li'); // Crea un elemento li
        li.textContent = `Tu amigo secreto sorteado es: ${amigoAleatorio}`; // Agrega el nombre sorteado al elemento li
        resultado.appendChild(li); // Agrega el elemento li al resultado
    }
   
}
