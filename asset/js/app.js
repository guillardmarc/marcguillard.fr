// On déclare les coordonnées de Paris
let lat = 47.45241;
let lon = -2.32014;

let villes = {
    // "MARCGUILLARD - Service numérique": {
    //     "lat": 47.45241,
    //     "lon": -2.32014,
    //     "description": "Siege sociale de l'entreprise",
    //     "image": "./asset/img/logo.png",
    //     "website": ""
    // },
    "Herbignac": {
        "lat": 47.4493217468261,
        "lon": -2.31763911247253,
        "description": "",
        "image": "./asset/img/activity_area/herbignac.png",
        "website": "https://www.herbignac.com/"
    },
    "Assérac": {
        "lat": 47.428970336914,
        "lon": -2.38897991180419,
        "description": "",
        "image": "./asset/img/activity_area/asserac.png",
        "website": "https://www.asserac.fr/"
    },
    "Arzal": {
        "lat": 47.51667,
        "lon": -2.36667,
        "description": "",
        "image": "./asset/img/activity_area/arzal.svg",
        "website": "https://www.arzal.bzh/"
    },
    "Camouël": {
        "lat": 47.48333,
        "lon": -2.4,
        "description": "",
        "image": "./asset/img/activity_area/camoel.avif",
        "website": "https://www.camoel.fr/"
    },
    "Crossac": {
        "lat": 47.411,
        "lon": -2.169,
        "description": "",
        "image": "./asset/img/activity_area/crossac.png",
        "website": "https://www.crossac.fr/"
    },
    "Férel": {
        "lat": 47.4818,
        "lon": -2.3421,
        "description": "",
        "image": "./asset/img/activity_area/ferel.png",
        "website": "https://www.ferel.fr/"
    },
    "La chapelle des Marais": {
        "lat": 47.4468,
        "lon": -2.2441,
        "description": "",
        "image": "./asset/img/activity_area/la_chapelle_des_marais.png",
        "website": "https://lachapelledesmarais.fr/"
    },
    "La Madeleine": {
        "lat": 47.349998,
        "lon": -2.36667,
        "description": "",
        "image": "",
        "website": ""
    },
    "La Roche Bernard": {
        "lat": 47.51667,
        "lon": -2.3,
        "description": "",
        "image": "./asset/img/activity_area/La_Roche-Bernard.svg",
        "website": "https://www.laroche-bernard.com/"
    },
    "La turballe": {
        "lat": 47.3478773,
        "lon": -2.5122428,
        "description": "",
        "image": "./asset/img/activity_area/la_turballe.svg",
        "website": "https://www.laturballe.fr/"
    },
    "Mesquer": {
        "lat": 47.3994396,
        "lon": -2.4603007,
        "description": "",
        "image": "./asset/img/activity_area/mesquer",
        "website": "https://www.mesquer-quimiac.fr/"
    },
    "Missillac": {
        "lat": 47.484,
        "lon": -2.155,
        "description": "",
        "image": "./asset/img/activity_area/nivillac.jpg",
        "website": "https://www.nivillac.fr/"
    },
    "Nivillac": {
        "lat": 47.535,
        "lon": -2.282,
        "description": "",
        "image": "./asset/img/activity_area/nivillac.jpg",
        "website": "https://www.nivillac.fr/"
    },
    "Piriac sur Mer": {
        "lat": 47.3783863,
        "lon": -2.5473788,
        "description": "",
        "image": "./asset/img/activity_area/piriac.jpg",
        "website": "https://www.piriac-sur-mer.fr/"
    },
    "Pénestin": {
        "lat": 47.484,
        "lon": -2.48333,
        "description": "",
        "image": "./asset/img/activity_area/penestin.png",
        "website": "https://www.penestin.fr/"
    },
    "Saint Joachim": {
        "lat": 47.383331,
        "lon": -2.2,
        "description": "",
        "image": "./asset/img/activity_area/saint_joachim.png",
        "website": "https://www.saint-joachim.fr/"
    },
    "Saint Lyphard": {
        "lat": 47.400002,
        "lon": -2.3,
        "description": "",
        "image": "./asset/img/activity_area/saint_lyphard.png",
        "website": "https://www.mairie-saintlyphard.fr/"
    },
    "Saint Molf": {
        "lat": 47.3933300,
        "lon": -2.4226078,
        "description": "",
        "image": "./asset/img/activity_area/saint_molf.jpeg",
        "website": "https://www.mairie-saint-molf.fr/"
    },
    "Saint Reine de Bretagne": {
        "lat": 47.433331,
        "lon": -2.18333,
        "description": "",
        "image": "",
        "website": "https://www.sainte-reine-de-bretagne.fr/"
    },
}

// On initialise la carte (en lui passant 'map' qui est l'ID de la DIV contenant la carte)
let map = L.map("map", {
    zoom: 10,
    center: [lat, lon]
});

// On boucle sur les villes
for(let [ville, contenu] of Object.entries(villes)){
    let coords = [contenu.lat, contenu.lon];

// On crée le marqueur pour chaque ville
    let marker = L.marker(coords).addTo(map);
    // marker.bindPopup(ville);
    
    let popup = `<div class="popup">
                    <img src="${contenu.image}" alt="${ville}" width="100" height="50">
                    <div>
                        <h2>${ville}</h2>
                        <p>${contenu.description}</p>
                        <a href="${contenu.website}" target="_blank" rel="noopener noreferrer">Site web de la ville</a>
                    </div>
                </div>`;

    marker.bindPopup(popup);

    var circle = L.circle([lat, lon], {
        radius: 20000,         // Rayon en mètres
        color: '#0A4D68',      // Couleur de la bordure
        weight: 3,           // Épaisseur de la bordure
        fillColor: '#fff',   // Couleur de remplissage
        fillOpacity: 0.03     // Opacité du remplissage (0 à 1)
    }).addTo(map);
}
// On ajoute le calque permettant d'afficher les images de la carte
L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
    minZoom: 8,
    maxZoom: 14,
    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>'
}).addTo(map);