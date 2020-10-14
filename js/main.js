var km = parseInt( prompt("Quanti kilometri vuoi percorrere?") );

if (isNaN(km)) {
  alert("Non hai inserito un numero. Ricarica la pagina per riprovare");
}


var età = parseInt( prompt("Qual'è la tua età?") );

if (isNaN(età)) {
  alert("Non hai inserito un numero. Ricarica la pagina per riprovare");
}


var tariffa = km * 0.21;


var scontoMinorenni = tariffa * 0.20;


var scontoOver = tariffa * 0.40;


var prezzo;


if (età < 18) {
  prezzo = tariffa - scontoMinorenni;
} else if (età > 65) {
  prezzo = tariffa - scontoOver;
} else {
  prezzo = tariffa;
}

prezzo = prezzo.toFixed(2);

document.getElementById("prezzo").innerHTML = "Il prezzo del biglietto è di " + prezzo + "€";
