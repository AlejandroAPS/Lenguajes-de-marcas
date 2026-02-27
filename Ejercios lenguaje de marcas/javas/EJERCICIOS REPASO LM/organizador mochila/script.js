class Objeto {
    constructor(nombre, peso, tipo) {
        this.nombre = nombre;
        this.peso = peso;
        this.tipo = tipo;
    }
}

let sarten = new Objeto("sarten", 2, "herramienta");
let payo = new Objeto("payo", 86, "humano");
let patatas = new Objeto("patatas", 0.2, "snack");
let galletas = new Objeto("galletas", 0.5, "snack");

function todocabe() {

    let lista = [sarten, payo, patatas, galletas];
    let pesoMax = 87;

    let pesoActual = 0;
    let objetosIncluidos = [];

    //Primero metemos TODOS los snacks que quepan
    for (let i = 0; i < lista.length; i++) {

        if (lista[i].tipo === "snack") {

            if (pesoActual + lista[i].peso <= pesoMax) {
                pesoActual += lista[i].peso;
                objetosIncluidos.push(lista[i].nombre);
            }
        }
    }

    //Luego metemos el resto de objetos priorizando meter la mayor cantidad 
    for (let i = 0; i < lista.length; i++) {

        if (lista[i].tipo !== "snack") {

            if (pesoActual + lista[i].peso <= pesoMax) {
                pesoActual += lista[i].peso;
                objetosIncluidos.push(lista[i].nombre);
            }

        }
    }

    alert("Objetos incluidos: " + objetosIncluidos);
}

todocabe();