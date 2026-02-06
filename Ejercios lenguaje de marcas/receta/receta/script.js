// Definimos un objeto con las estrategias y sus variantes
const strategies = {
  "dragapult": [
    {name: "Dragapult Charizard", sprite: "sprites/dragapult_charizard.png"},
    {name: "Dragapult Dusknoir", sprite: "sprites/dragapult_dusknoir.png"},
    {name: "Dragapult Blaziken", sprite: "sprites/dragapult_blaziken.png"}
  ],
  "miraidon": [
    {name: "Miraidon Eelektrik", sprite: "sprites/Miraidon_eelektrik.png"},
    {name: "Miraidon Magneton", sprite: "sprites/miraidon_magneton.png"},
    {name: "Miraidon Joltik", sprite: "sprites/miraidon_joltik.png"}
  ]
};
let selectedVariant = null;




const strategyInput = document.getElementById("strategy");
const customSelect = document.getElementById("customSelect");
const selectedDiv = customSelect.querySelector(".selected");
const optionsDiv = customSelect.querySelector(".options");

strategyInput.addEventListener("input", () => {
  const value = strategyInput.value.toLowerCase().trim();
  optionsDiv.innerHTML = ""; // Limpiamos las opciones

  if (strategies[value]) {
    strategies[value].forEach(variant => {
      const div = document.createElement("div");
      div.classList.add("option");
      div.dataset.value = variant.name;

      const img = document.createElement("img");
      img.src = variant.sprite;
      img.alt = variant.name;

      div.appendChild(img);
      div.appendChild(document.createTextNode(variant.name));
      optionsDiv.appendChild(div);

      div.addEventListener("click", () => {

        selectedDiv.innerHTML = "";


      const imgSelected = document.createElement("img");
      imgSelected.src = variant.sprite;
      imgSelected.alt = variant.name;
      imgSelected.classList.add("selected-img");


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

// Toggle del menú al click
selectedDiv.addEventListener("click", () => {
  optionsDiv.style.display = optionsDiv.style.display === "block" ? "none" : "block";
});

// Cerrar el menú si se hace click fuera
document.addEventListener("click", (e) => {
  if (!customSelect.contains(e.target)) {
    optionsDiv.style.display = "none";
  }
});