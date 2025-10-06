/*
TOOLS:

- promt
- const / let
- operatore di comparazione
- if / else
*/

/* Inizializzazione valori con inserimento da input */

// Inserimento dei chilometri da percorrere
let km = Number(prompt('Inserisci i chilometri che vuoi percorrere'))

// Inserimento dell'età del passeggero
let age = Number(prompt('Inserisci la tua età'))

// Prezzo al chilometro
const costAtKm = 0.21

/* Calcolo del prezzo totale del viaggio */

// Calcolo il prezzo in base ai chilometri
let baseCost = costAtKm * km
console.log(baseCost)
// Applico lo sconto del 20% se il passeggero è minorenne
// Applico lo sconto del 40% se il passeggero è over 65
// Mostro come output il prezzo totale del viaggio


