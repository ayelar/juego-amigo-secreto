let listaAmigos = [];
let nombre = "";
let amigoSorteado = ""


function limpiarCaja() {
   let nombre = document.querySelector("#amigo").value = '';
}

function agregarAmigo () {
    let nombre = (document.getElementById('amigo').value);
    if (nombre === '' || !isNaN(nombre)) {
        alert("Por favor ingrese un nombre válido")
    } else{ 
        listaAmigos.push(nombre);
        let ul = document.getElementById("listaAmigos")
        let li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
        console.log(nombre);
    }      
    limpiarCaja();
}

function sortearAmigo() {
    let indice = Math.floor(Math.random()*listaAmigos.length);
    let amigoSorteado = listaAmigos[indice];
    let resultado = document.getElementById("resultado");
    //resultado.innerHTML = ""; 
    let li = document.createElement("li");
    li.textContent = "El Amig@ sorteado es: " + amigoSorteado;
    resultado.appendChild(li);

    document.getElementById("listaAmigos").innerHTML="";
    listaAmigos=[];

}