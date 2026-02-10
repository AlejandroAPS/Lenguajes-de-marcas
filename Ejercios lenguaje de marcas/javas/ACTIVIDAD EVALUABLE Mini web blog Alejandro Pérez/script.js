
function cambiartexto() {
    // Obtener el valor de lo que haya escrito el usuario
    let nuevoTexto = document.getElementById("escritura").value;
    
    // Verificar si no está vacío y si esta vacio envia una alerta
    if (nuevoTexto.trim() === "") {
        alert("Por favor escribe algo en el cuadro de texto.");
        return;
    }

    // Cambia cualquier instancia de /n con un salto de linea html <br>
    document.getElementById("Texto").innerHTML = nuevoTexto.replace(/\n/g, "<br>");

    // Limpiar el textarea para volver a escribir 
    document.getElementById("escritura").value = "";
}

function cambiarcolor() {
    // Array con los colores
    const colores = ["red", "blue", "green", "orange", "purple", "brown"];

    // Escoger un color aleatorio
    const indice = Math.floor(Math.random() * colores.length);

    // Aplicar el color al párrafo central
    document.getElementById("Texto").style.color = colores[indice];
}


function cambiartamano() {
    // Array con tamaños de letra que quieras usar
    const tamaños = ["9px","14px", "16px", "18px", "20px", "24px"];

    // Escoger un índice aleatorio
    const indice = Math.floor(Math.random() * tamaños.length);

    // Aplicar el tamaño al párrafo central
    document.getElementById("Texto").style.fontSize = tamaños[indice];
}



// JAVA SCRIPT DEL CARRUSEL

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const indicatorsContainer = document.querySelector('.indicators');

// Crear indicadores
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.addEventListener('click', () => goToSlide(index));
    indicatorsContainer.appendChild(dot);
});
const indicators = document.querySelectorAll('.indicators div');

function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
        indicators[index].classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Cambio automático cada 3 segundos
setInterval(nextSlide, 3000);

// Inicializar
updateCarousel();
