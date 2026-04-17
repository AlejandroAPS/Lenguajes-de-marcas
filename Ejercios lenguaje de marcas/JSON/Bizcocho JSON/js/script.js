var miReceta = {
  "receta": "Bizcocho",
  "elaboracion": "Mezcla los ingredientes con mucho cariño, vuelca la masa en un molde para bizcocho manchado de mantequilla y hornea durante 40 minutos a 190 grados",
  "ingredientes": [
    {
      "ingrediente": "Huevos",
      "cantidad": 3,
      "medida": "unidad"
    },
    {
      "ingrediente": "Yogurt natural",
      "cantidad": 1,
      "medida": "unidad"
    },
    {
      "ingrediente": "Levadura",
      "cantidad": 1,
      "medida": "sobre"
    },
    {
      "ingrediente": "Azúcar",
      "cantidad": 2,
      "medida": "Medidas de vaso de yogurt"
    },
    {
      "ingrediente": "Sal",
      "cantidad": 1,
      "medida": "Pizca"
    },
    {
      "ingrediente": "Harina",
      "cantidad": 2,
      "medida": "Medidas de vaso de yogurt"
    },
    {
      "ingrediente": "Cola cao",
      "cantidad": 1,
      "medida": "Medida de vaso de yogurt"
    },
    {
      "ingrediente": "Aceite",
      "cantidad": 1,
      "medida": "Medida de vaso de yogurt"
    }
  ]
};

onload = mostrarReceta;

function mostrarReceta() {
  // Título
  document.getElementById("receta").innerText =
    "Receta: " + miReceta.receta;

  // Elaboración
  document.getElementById("elaboracion").innerText =
    miReceta.elaboracion;

  // Lista de ingredientes
  const lista = document.getElementById("ingredientes");

  miReceta.ingredientes.forEach(item => {
    const li = document.createElement("li");

    li.textContent =
      item.cantidad + " " +
      item.medida + " de " +
      item.ingrediente;

    lista.appendChild(li);
  });
}