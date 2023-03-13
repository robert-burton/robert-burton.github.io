import * as L from 'https://unpkg.com/leaflet@1.6.0/dist/leaflet.js';
import * as omnivore from 'https://cdnjs.cloudflare.com/ajax/libs/leaflet-omnivore/0.3.4/leaflet-omnivore.min.js';

// Importing from CDN in a .js file
/* const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/leaflet@1.6.0/dist/leaflet.js';
document.body.appendChild(script1);

const script2 = document.createElement('script');
script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet-omnivore/0.3.4/leaflet-omnivore.min.js';
document.body.appendChild(script2); */

// All the code for the leaflet map will come here
/* const map = L.map('map', {
    center: [19.4326, -99.1332],
    zoom: 3.5
});
 */
/* L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);
 */
//Cargar archivo KML con poligonos de eclipse
/* const kmlLayer = L.layerGroup().addTo(map);
omnivore.kml('datos2023.kml').addTo(kmlLayer); */

//[long,lat]
/* const coordinates = [
    // Aguascalientes
    [-102.291, 21.8818],
    // Mexicali
    [-115.468, 32.6519],
    // La Paz
    [-110.313, 24.1448],
    // San Francisco de Campeche
    [-90.5259, 19.8442],
    // Tuxtla Gutiérrez
    [-93.1169, 16.7535],
    // Chihuahua
    [-106.0691, 28.632],
    // Ciudad de México (Mexico City)
    [-99.1332, 19.4326],
    // Saltillo
    [-101.0053, 25.4244],
    // Colima
    [-103.725, 19.2433],
    // Durango
    [-104.6532, 24.0277],
    // Guanajuato
    [-101.2574, 21.019],
    // Chilpancingo
    [-99.505, 17.5518],
    // Pachuca
    [-98.7591, 20.1011],
    // Guadalajara
    [-103.3496, 20.6597],
    // Toluca
    [-99.6557, 19.2826],
    // Morelia
    [-101.1953, 19.7049],
    // Cuernavaca
    [-99.2348, 18.922],
    // Tepic
    [-104.8764, 21.5059],
    // Monterrey
    [-100.3161, 25.6866],
    // Oaxaca de Juárez
    [-96.7236, 17.0654],
    // Puebla
    [-98.2063, 19.0414],
    // Querétaro
    [-100.3899, 20.5888],
    // Chetumal
    [-88.2996, 18.5001],
    // San Luis Potosí
    [-100.9855, 22.1565],
    // Culiacán
    [-107.3947, 24.8053],
    // Hermosillo
    [-110.9719, 29.097],
    // Villahermosa
    [-92.9303, 17.9869],
    // Ciudad Victoria
    [-99.1436, 23.7414],
    // Tlaxcala
    [-98.2393, 19.3189],
    // Xalapa
    [-96.9102, 19.5438],
    // Mérida
    [-89.6237, 20.9676],
    // Zacatecas
    [-102.5832, 22.7709]
    ]; */

//[lat,long]
const coordenadas = [
    // Aguascalientes
    [21.8818, -102.291],
    // Mexicali
    [32.6519, -115.468],
    // La Paz
    [24.1448, -110.313],
    // San Francisco de Campeche
    [19.8442, -90.5259],
    // Tuxtla Gutiérrez
    [16.7535, -93.1169],
    // Chihuahua
    [28.6320, -106.0691],
    // Ciudad de México (Mexico City)
    [19.4326, -99.1332],
    // Saltillo
    [25.4244, -101.0053],
    // Colima
    [19.2433, -103.7250],
    // Durango
    [24.0277, -104.6532],
    // Guanajuato
    [21.0190, -101.2574],
    // Chilpancingo
    [17.5518, -99.505],
    // Pachuca
    [20.1011, -98.7591],
    // Guadalajara
    [20.6597, -103.3496],
    // Toluca
    [19.2826, -99.6557],
    // Morelia
    [19.7049, -101.1953],
    // Cuernavaca
    [18.9220, -99.2348],
    // Tepic
    [21.5059, -104.8764],
    // Monterrey
    [25.6866, -100.3161],
    // Oaxaca de Juárez
    [17.0654, -96.7236],
    // Puebla
    [19.0414, -98.2063],
    // Querétaro
    [20.5888, -100.3899],
    // Chetumal
    [18.5001, -88.2996],
    // San Luis Potosí
    [22.1565, -100.9855],
    // Culiacán
    [24.8053, -107.3947],
    // Hermosillo
    [29.0970, -110.9719],
    // Villahermosa
    [17.9869, -92.9303],
    // Ciudad Victoria
    [23.7414, -99.1436],
    // Tlaxcala
    [19.3189, -98.2393],
    // Xalapa
    [19.5438, -96.9102],
    // Mérida
    [20.9676, -89.6237],
    // Zacatecas
    [22.7709, -102.5832]
    ];

/* var markers = [];

for(let i = 0; i<coordenadas.length; i++){
    markers[i] = L.marker(coordenadas[i]).addTo(map);
    console.log(coordenadas[i])
} */