/* Creo una funzione che va a prendersi il quadrato che ha 
come id verde, lo cambia di colore in arancione */

let a = 0;

function cambia() {
    if (a == 0) {
        document.getElementById("verde").style.backgroundColor = "orange";
        a = 1;
    }
    else if (a == 1) {
        document.getElementById("verde").style.backgroundColor = "green";
        a = 0;
    }      
}


/* Oggetti in javascript */
let b = 10; /* numero */
let frutto = "mela"; /* stringa */
let lista = ["mele", "acqua", "zucchero"]; /* lista */

let emanuele = {
    cognome: "Matta",
    eta: 10,
    casa: "Sesto SG"
}

/* Comando che inserisce le info di emanuele nei paragrafi */
function cambiaInfo() {
    document.getElementById("cognome").innerText = emanuele.cognome;
    document.getElementById("eta").innerText = emanuele.eta;
    document.getElementById("casa").innerText = emanuele.casa;
}

cambiaInfo();

/* funzione che aggiorna l'oggetto con quello che scritto io */
function aggiornaOggetto() {
    let nuovoCognome = document.getElementById("inCognome").value;
    let nuovoEta = document.getElementById("inEta").value;
    let nuovoCasa = document.getElementById("inCasa").value;

    /* aggiorno le informazioni di emanuele */
    emanuele.cognome = nuovoCognome;
    emanuele.eta = nuovoEta;
    emanuele.casa = nuovoCasa;

    /* richiamo la funzione che aggiorna tutto */
    cambiaInfo();
}



