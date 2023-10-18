//Raccolta dati
const km_viaggio = parseInt(prompt("Ciao, quanti km devi percorrere sul treno?"));
    console.log(km_viaggio, typeof km_viaggio);
const eta = parseInt(prompt("Quanti anni hai?"));
    console.log(eta, typeof eta);

//Calcolo Prezzo Base
let prezzo_base = km_viaggio * 0.21;
    console.log(prezzo_base, typeof prezzo_base);

//Verifico e Calcolo lo Sconto
let prezzo_sconto ;

if (eta > 65) {
    prezzo_sconto = prezzo_base - ( prezzo_base * 0.4);
    prezzo_sconto = prezzo_sconto.toPrecision(2);
    console.log(prezzo_sconto, typeof prezzo_sconto);
} else if (eta < 18) {
    prezzo_sconto = prezzo_base - ( prezzo_base * 0.2);
    prezzo_sconto = prezzo_sconto.toPrecision(2);
    console.log(prezzo_sconto, typeof prezzo_sconto);
}else {
    prezzo_sconto = prezzo_base;
    prezzo_sconto = prezzo_sconto.toPrecision(2);
    console.log(prezzo_sconto, typeof prezzo_sconto);
}

//Output

