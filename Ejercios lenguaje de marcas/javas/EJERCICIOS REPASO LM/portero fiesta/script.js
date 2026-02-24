let personas = [
    { edad: 18, invitacion: false },
    { edad: 19, invitacion: false },
    { edad: 12, invitacion: true },
    { edad: 15, invitacion: false },
    { edad: 13, invitacion: false },
    { edad: 40, invitacion: false },
    { edad: 30, invitacion: false },
    { edad: 14, invitacion: false }
];


let i = 1;

for (const persona of personas){
    
    if (persona['edad'] < 18 && persona['invitacion']) {
    alert("Persona número " + i + " puede pasar debido a su invitación");
    }
    else if (persona['edad'] < 18) {
        alert("Persona número " + i + " NO puede pasar");
    }
    else {
        alert("Persona número " + i + " puede pasar");
    }
    i = i + 1;
};



