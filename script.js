// Apre/Chiude le sezioni
function toggleSection(event) {
  // Recupera l'elemento del pulsante cliccato
  var btn = event.currentTarget;
  // Recupera l'elemento "section-content" della sezione corrente
  var content = btn.nextElementSibling;
  // Inverte lo stato di visualizzazione dell'elemento "section-content"
  if (content.style.display === "none") {
    content.style.display = "block";
    btn.textContent = "Collapse Section";
  } else {
    content.style.display = "none";
    btn.textContent = "Open Section";
  }
}

//* Script per contare il numero di viaggi:

// Seleziona tutti gli elementi con la classe "travel-item"
var travelItems = document.querySelectorAll(".travel-item");
// Aggiorna il valore del contatore con la lunghezza della lista degli elementi
document.getElementById("counter").textContent = travelItems.length;

// Rimuove tutte le card
function removeCards() {
  var cards = document.querySelectorAll(".card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].remove();
  }
}