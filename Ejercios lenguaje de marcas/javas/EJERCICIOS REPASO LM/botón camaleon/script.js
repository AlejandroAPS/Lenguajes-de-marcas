const boton = document.getElementById("boton");
const texto = document.getElementById("texto");

// Frases para el <p>
const frases = [
    "Hava nagila hava",
    "Buenas tardes",
    "Buenas tardes",
    "Como estamos rey"
];

// Clases para estilo aleatorio
const estilos = ["estilo1", "estilo2", "estilo3", "estilo4"];

let indice = 0;
let contadorClicks = 0;

boton.addEventListener("click", () => {

    //Cambiar texto (ciclo)
    texto.textContent = frases[indice];
    indice = (indice + 1) % frases.length;

    //Cambiar estilo aleatorio
    //quitar todas las clases de estilos
    texto.classList.remove(...estilos);

    //elegir clase aleatoria
    const claseAleatoria = estilos[Math.floor(Math.random() * estilos.length)];
    texto.classList.add(claseAleatoria);

    //Contar clics
    contadorClicks = contadorClicks + 1;

    //Bloquear botón 2 segundos cada 10 clics
    if (contadorClicks === 10) {
        boton.disabled = true;
        setTimeout(() => {
            boton.disabled = false;
            contadorClicks = 0;
        }, 2000);
    }

});
