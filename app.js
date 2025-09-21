// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let campoTexto = document.getElementById("amigo"); 
let listadoAmigos = document.getElementById("listaAmigos");


function agregarAmigo(){
    let valorCampoTexto = campoTexto.value.trim() //Investigue que este trim() sirve para evitar que cuando el usuario le de por colocar el campo vacio pero con espacios sea tomado como un dato valido, lo que hace basicamente es eliminar los espacios antes o despues del String.

    if(valorCampoTexto === ""){
        alert("Por favor, inserte un nombre.");
        return;
    } else {
        amigos.push(valorCampoTexto);
    }

    campoTexto.value = "";

    listadoAmigos.innerHTML = ""

    for(let i = 0; i < amigos.length; i++){
        let nuevoLi = document.createElement("li");

        listadoAmigos.appendChild(nuevoLi); 
        nuevoLi.textContent = amigos[i]; 
    }
}

function sortearAmigo(){

}
