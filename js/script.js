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
let sconto ;

if (eta > 65) {
    sconto = "40%"
    prezzo_sconto = prezzo_base - ( prezzo_base * 0.4);
    prezzo_sconto = (Math.round(prezzo_sconto * 100) / 100).toFixed(2);
    console.log(prezzo_sconto, typeof prezzo_sconto);
} else if (eta < 18) {
    sconto = "20%"
    prezzo_sconto = prezzo_base - ( prezzo_base * 0.2);
    prezzo_sconto = (Math.round(prezzo_sconto * 100) / 100).toFixed(2);
    console.log(prezzo_sconto, typeof prezzo_sconto);
}else {
    sconto = "Nessuno sconto per la sua fascia d'età"
    prezzo_sconto = prezzo_base;
    prezzo_sconto = (Math.round(prezzo_sconto * 100) / 100).toFixed(2);
    console.log(prezzo_sconto, typeof prezzo_sconto);
}

//Output
document.getElementById("eta").innerHTML = eta;
document.getElementById("km_viaggio").innerHTML = km_viaggio;
document.getElementById("sconto").innerHTML = sconto;
document.getElementById("prezzo_sconto").innerHTML = prezzo_sconto;
