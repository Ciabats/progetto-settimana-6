# Atelier — Studio di architettura

## Struttura file

- `index.html` — struttura della pagina
- `style.css` — stili, palette colori, tema chiaro/scuro
- `script.js` — render dinamico dei lavori, filtro categorie, toggle tema

## Sezioni

- **Navbar** sticky con hamburger su mobile e bottone tema
- **Hero** (`#studio`) a tutta altezza con CTA verso i contatti
- **Servizi** (`#servizi`): 3 card con icona, titolo, descrizione
- **Lavori** (`#lavori`): 6 card generate da JS, filtrabili per categoria
- **Contatti** (`#contatti`): form (nome, email, tipo progetto, messaggio)
- **Footer**: contatti, link interni, copyright

## Funzionalità JavaScript

- **Render lavori**: card create con `createElement` + `forEach` a partire da un array di oggetti
- **Filtro categorie**: event delegation su `#filtri`, `filter()` sull'array e re-render
- **Toggle tema**: `classList.toggle("dark")` sul `body`; il CSS ridefinisce le variabili colore




