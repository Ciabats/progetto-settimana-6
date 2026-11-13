// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.


// array di oggetti per i lavori
const lavori = [
    { id: 1, titolo: "Villa del Lago", anno: 2024, categoria: "residenziale", img: "https://placehold.co/600x400" },
    { id: 2, titolo: "Loft Navigli", anno: 2023, categoria: "interior", img: "https://placehold.co/600x400" },
    { id: 3, titolo: "Appartamento Brera", anno: 2024, categoria: "interior", img: "https://placehold.co/600x400" },
    { id: 4, titolo: "Casa Monte Verde", anno: 2022, categoria: "residenziale", img: "https://placehold.co/600x400" },
    { id: 5, titolo: "Showroom Centro", anno: 2023, categoria: "ristrutturazioni", img: "https://placehold.co/600x400" },
    { id: 6, titolo: "Palazzo Porta Nuova", anno: 2021, categoria: "ristrutturazioni", img: "https://placehold.co/600x400" }
];

// Oggetto che traduce la chiave della categoria nel testo mostrato all'utente
const etichette = {
    residenziale: "Residenziale",
    interior: "Interior design",
    ristrutturazioni: "Ristrutturazioni"
};

// Riferimenti agli elementi che useremo più volte
const contenitoreLavori = document.getElementById("contenitore-lavori");
const filtri = document.getElementById("filtri");
const darkMode = document.getElementById("toggle-dark");
const darkIcon = document.getElementById("dark-icon")

//Funzioni
// 2. RENDER LAVORI: array -> elementi HTML con forEach + createElement

function renderLavori(lista) {
    // Svuoto il contenitore prima di ricrearlo, altrimenti le vecchie card restano
    contenitoreLavori.innerHTML = "";

    lista.forEach(function (lavoro) {

        // creo i tag html
        const colonna = document.createElement("div");
        const card = document.createElement("div");
        const img = document.createElement("img");
        const body = document.createElement("div");
        const etichetta = document.createElement("p");
        const titolo = document.createElement("h3");
        const anno = document.createElement("p");

        // assegno le classi
        colonna.classList.add("col-12", "col-sm-6", "col-lg-4", "mb-4");
        card.classList.add("card-elevata", "h-100");
        img.classList.add("img-fluid", "w-100");
        body.classList.add("p-3");
        etichetta.classList.add("small", "text-uppercase", "text-primary", "fw-semibold", "mb-1");
        titolo.classList.add("h5", "fw-bold", "mb-1");
        anno.classList.add("text-muted-custom", "m-0");

        // eventuali attributi
        img.setAttribute("src", lavoro.img);
        img.setAttribute("alt", lavoro.titolo);

        // mi riporto i valori dall'array
        etichetta.textContent = etichette[lavoro.categoria];
        titolo.textContent = lavoro.titolo;
        anno.textContent = lavoro.anno;

        // creo la struttura HTML
        body.appendChild(etichetta);
        body.appendChild(titolo);
        body.appendChild(anno);
        card.appendChild(img);
        card.appendChild(body);
        colonna.appendChild(card);
        contenitoreLavori.appendChild(colonna);
    });
}


// event delegation sull div dei filtri, unico eventListener
filtri.addEventListener("click", function (event) {
    const bottone = event.target.closest("[data-categoria]"); //risalgo al bottone cliccato

    // Se il click non è finito su un bottone con data-categoria, esco
    if (!bottone) return;

    // Tolgo "active" a tutti i bottoni e lo metto solo su quello cliccato
    filtri.querySelectorAll(".btn").forEach(function (btn) {
        btn.classList.remove("active");
    });
    bottone.classList.add("active");

    // dataset.categoria legge l'attributo data-categoria
    const categoria = bottone.dataset.categoria;

    // filter restituisce un nuovo array con solo i lavori della categoria scelta
    let filtrati;
    if (categoria === "tutti") {
        filtrati = lavori;
    } else {
        filtrati = lavori.filter(function (lavoro) {
            return lavoro.categoria === categoria;
        });
    }

    // Ridisegno la griglia con la lista filtrata
    renderLavori(filtrati);
});


// 4. evento per cambiare in dark-mode la pagina
darkMode.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    // in base al tema cambio icona
    if (document.body.classList.contains("dark")) {
        darkIcon.classList.remove("fa-solid", "fa-moon");
        darkIcon.classList.add("fa-regular", "fa-sun");
    } else {
        darkIcon.classList.remove("fa-regular", "fa-sun");
        darkIcon.classList.add("fa-solid", "fa-moon");
    }
});


renderLavori(lavori);