// Todos los tipos de decks guardados
const strategies = {
  "dragapult": [
    {
      name: "Dragapult Charizard",
      sprite: "sprites/dragapult_charizard.png",
      deckImage: "IMGS/Dragapult_charizard.png"
    },
    {
      name: "Dragapult Dusknoir",
      sprite: "sprites/dragapult_dusknoir.png",
      deckImage: "IMGS/Dragapult_dusknoir.png"
    },
    {
      name: "Dragapult Blaziken",
      sprite: "sprites/dragapult_blaziken.png",
      deckImage: "IMGS/Dragapult_blaziken.png"
    }
  ],
  "miraidon": [
    {
      name: "Miraidon Eelektrik",
      sprite: "sprites/miraidon_eelektrik.png",
      deckImage: "IMGS/Miraidon_eelektrik.png"
    },
    {
      name: "Miraidon Magneton",
      sprite: "sprites/miraidon_magneton.png",
      deckImage: "IMGS/Miraidon_magneton.png"
    },
    {
      name: "Miraidon Joltik",
      sprite: "sprites/miraidon_joltik.png",
      deckImage: "IMGS/Miraidon_joltik.png"
    }
  ],
  "charizard": [
    {
      name: "Charizard Pidgeot",
      sprite: "sprites/Charizard_pidgeot.png",
      deckImage: "IMGS/Charizard_pidgeot.png"
    },
    {
      name: "Charizard Noctowl",
      sprite: "sprites/Charizard_noctowl.png",
      deckImage: "IMGS/Charizard_noctowl.png"
    }
  ]
};


// Variables
let selectedVariant = null;

const strategyInput = document.getElementById("strategy");
const customSelect = document.getElementById("customSelect");
const selectedDiv = customSelect.querySelector(".selected");
const optionsDiv = customSelect.querySelector(".options");
const form = document.getElementById("recipeForm");
const deckResult = document.getElementById("deckResult");

// Input del deck (en esto me ha ayudado gpt)
strategyInput.addEventListener("input", () => {
  const value = strategyInput.value.toLowerCase().trim();
  optionsDiv.innerHTML = "";
  selectedVariant = null;
  deckResult.innerHTML = "";

  if (strategies[value]) {
    strategies[value].forEach(variant => {
      const div = document.createElement("div");
      div.classList.add("option");

      const img = document.createElement("img");
      img.src = variant.sprite;
      img.alt = variant.name;

      div.appendChild(img);
      div.appendChild(document.createTextNode(variant.name));
      optionsDiv.appendChild(div);

      div.addEventListener("click", () => {
        selectedVariant = variant;

        selectedDiv.innerHTML = "";

        const imgSelected = document.createElement("img");
        imgSelected.src = variant.sprite;
        imgSelected.alt = variant.name;

        const text = document.createElement("span");
        text.textContent = variant.name;

        selectedDiv.appendChild(imgSelected);
        selectedDiv.appendChild(text);

        optionsDiv.style.display = "none";
      });
    });

    optionsDiv.style.display = "block";
  } else {
    selectedDiv.textContent = "Selecciona una estrategia primero";
    optionsDiv.style.display = "none";
  }
});

// Con esto el select funciona y no se caga encima
selectedDiv.addEventListener("click", () => {
  if (optionsDiv.children.length > 0) {
    optionsDiv.style.display =
      optionsDiv.style.display === "block" ? "none" : "block";
  }
});

// Se cierra el seelct con esto
document.addEventListener("click", (e) => {
  if (!customSelect.contains(e.target)) {
    optionsDiv.style.display = "none";
  }
});

// Si no hay nada seleccionado, pa fuera papa,si si lo hay evita que se recarge la pagina al ser un form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!selectedVariant) {
    alert("Selecciona una variante primero");
    return;
  }

  mostrarDeck(selectedVariant);
});

// Muestra la lista
function mostrarDeck(variant) {
  deckResult.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = variant.name;

  const img = document.createElement("img");
  img.src = variant.deckImage;
  img.alt = "Deck " + variant.name;

  deckResult.appendChild(title);
  deckResult.appendChild(img);
}



// ==========================
// CODIGO CARRUSEL
// ==========================

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

// Cambio automático cada 5 segundos
setInterval(nextSlide, 5000);

// Inicializar
updateCarousel();
