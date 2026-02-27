let vmision = "";

function nuevamision(){
    var lugares = [
        "israel",
        "estados unidos de israel",
        "isla de Epstein"
    ]

    var objeto = [
        "torah",
        "prepucio de bebe",
        "tripas de bebe"
    ]

    var acciones = [
        "matar al negrata",
        "besar al murito ese gracioso",
        "usar c4 para derrumbar las torres gemelas"
    ]
    //se geenran numero random
    let randLugar = Math.floor(Math.random() * acciones.length);
    let randObjeto = Math.floor(Math.random() * objeto.length);
    let randAccion = Math.floor(Math.random() * lugares.length);


    let nmision = "Debes " + acciones[randAccion] + " equipado con " + objeto[randObjeto] + " en " + lugares[randLugar];
    
    //si es distinto
    if (nmision != vmision){
        alert("Tienes una nueva mision!");
        alert(nmision);
        vmision = nmision;
    }else{ //si es igual se vuelve a ejecutar la funcion
        nuevamision();
        return;
    }
}


nuevamision();
