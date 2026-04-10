const jsonUrl = 'data.json';

fetch(jsonUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    return response.json();
  })
  .then(data => {
    displayData(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

function displayData(data) {
  const tableBody = document.getElementById('data-table-body');

  data.forEach(item => {
    const row = document.createElement('tr');

    // Columna Imagen
    const imgCell = document.createElement('td');
    const img = document.createElement('img');
    img.src = item.img;
    img.width = 80; // width fijado para esta columna porque si no cada imagen se ve distinto y esta raro
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    // Columna Nombre
    const nameCell = document.createElement('td');
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    // Columna HP
    const hpCell = document.createElement('td');
    hpCell.textContent = item.hp;
    row.appendChild(hpCell);

    // Columna Tipo
    const typeCell = document.createElement('td');
    typeCell.textContent = item.type;
    row.appendChild(typeCell);

    // Columna Habilidad (true/false → texto)
    const abilityCell = document.createElement('td');
    abilityCell.textContent = item.ability ? "Sí" : "No";
    row.appendChild(abilityCell);

    // Columna Ataques
    const attacksCell = document.createElement('td');
    attacksCell.textContent = item.attacks.join(", ");
    row.appendChild(attacksCell);

    tableBody.appendChild(row);
  });
}