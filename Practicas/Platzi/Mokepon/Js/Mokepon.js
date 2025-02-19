    let ataquejugador
    let ataqueenemigo
    let vidasjugador = 3
    let vidasenemigo = 3

function iniciarjuego()  {
    let sectionseleccionarataque = document.getElementById("seleccionar-ataque")
    sectionseleccionarataque.style.display = "none"

    let sectionreiniciar = document.getElementById("reiniciar")
    sectionreiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataquefuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueagua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataquetierra)
    
    let botonreiniciar = document.getElementById("boton-reiniciar")
    botonreiniciar.addEventListener("click", reiniciarjuego)
}
function seleccionarMascotaJugador() {
    let sectionseleccionarmascota = document.getElementById("seleccionar-mascota")
    sectionseleccionarmascota.style.display = "none"

    let sectionseleccionarataque = document.getElementById("seleccionar-ataque")
    sectionseleccionarataque.style.display = "block"

    let inputCapipepo = document.getElementById("Capipepo")
    let inputHipodoge = document.getElementById("Hipodoge")
    let inputRatigueya = document.getElementById("Ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    }  else { 
        alert("Selecciona una Mascota")
       
    }
    
      seleccionarMascotaEnemigo()

}
function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    }  else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
        }
}

function ataquefuego() {
    ataquejugador = "fuego"
    ataqueAleatorioenemigo()
}
function ataqueagua() {
    ataquejugador = "agua"
    ataqueAleatorioenemigo()
}
function ataquetierra() {
    ataquejugador = "tierra"
    ataqueAleatorioenemigo()
}

function ataqueAleatorioenemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueenemigo = "fuego"
    } else if (ataqueAleatorio == 2) {
        ataqueenemigo = "agua"
    } else {
        ataqueenemigo = "tierra"
    }

    combate()
}

function combate() {
    let spanvidasjugador = document.getElementById("vidas-jugador")
    let spanvidasenemigo = document.getElementById("vidas-enemigo")

    if(ataqueenemigo == ataquejugador) {
        crearmensaje("EMPATE") 
    } else if(ataquejugador == "fuego" && ataqueenemigo == "tierra") {
        crearmensaje("GANASTE")
        vidasenemigo--
        spanvidasenemigo.innerHTML = vidasenemigo
    } else if(ataquejugador == "agua" && ataqueenemigo == "fuego") {
        crearmensaje("GANASTE")
        vidasenemigo--
        spanvidasenemigo.innerHTML = vidasenemigo
    } else if(ataquejugador == "tierra" && ataqueenemigo == "agua") {
        crearmensaje("GANASTE")
        vidasenemigo--
        spanvidasenemigo.innerHTML = vidasenemigo
    } else {
       crearmensaje("PERDISTE")
       vidasjugador--
       spanvidasjugador.innerHTML = vidasjugador
    }

    revisarvidas()    
}

function revisarvidas() {
    if (vidasenemigo == 0) {
        crearmensajefinal("FELICITACIONES! Ganaste :)")
    } else if (vidasjugador == 0) {
        crearmensajefinal("Lo siento, Perdiste :(")
    }
}

function crearmensaje(resultado) {
    let sectionmensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota ataco con " + ataquejugador + ", La mascota del enemigo ataco con " + ataqueenemigo + "- " + resultado

    sectionmensajes.appendChild(parrafo)
}

function crearmensajefinal(resultadofinal) {
    let sectionmensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadofinal

    sectionmensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let sectionreiniciar = document.getElementById("reiniciar")
    sectionreiniciar.style.display = "block"

}
function reiniciarjuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarjuego)
