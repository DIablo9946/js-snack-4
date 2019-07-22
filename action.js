// JSnack #4:
// In un array sono contenuti i nomi degli invitati
// alla festa del grande Gatsby, chiedi all’utente il suo
// nome e comunicagli se può partecipare o no alla festa.


// Mi creo le variabili

var cognomi, richiesta, stampa, trova;
stampa = document.getElementById('my');
// trova = false;
// Creo l'array

cognomi = ["Giacchetti", "Zabbone", "Gradasso", "Caprone", "Danzello"]
console.log(cognomi);

// Chiedo all'utente il suo cognome

richiesta = prompt("Qual'è il Tuo cognome?");

// Faccio il ciclo per determinare la casistica

for (i = 0; i < cognomi.length; i++) {
  if (richiesta == cognomi[i]){
    trova = true;
  }
}

// Faccio dei controlli e gli dico se puo partecipare o meno alla festa

if (trova) {
  console.log("Puoi partecipare alla festa, congratulazioni");
  stampa.innerHTML = "Puoi partecipare alla festa, congratulazioni";
} else {
  console.log("Mi dispiace ma non sei stato invitato alla festa");
  stampa.innerHTML = "Mi dispiace ma non sei stato invitato alla festa";
}
