const mindtopiaLocation = [37.953411, 23.739782];

var map = L.map('map').setView(mindtopiaLocation, 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker(mindtopiaLocation).addTo(map)
    .bindPopup('Θα μας βρείτε εδώ!')
