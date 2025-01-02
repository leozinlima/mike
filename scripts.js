var map = L.map('map').setView([-15.9899, -48.0443], 15);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '<img src="assets/tet.png" alt="capacete" style="width: 1rem; height: auto; vertical-align: middle;"> Urbanize'
        }).addTo(map);

        var myIcon = L.icon({
            iconUrl: 'assets/tets1.svg',
            iconSize: [57, 125],
            popupAnchor: [0, -30]
        });

        var myIconRed = L.icon({
            iconUrl: 'assets/tets2.svg',
            iconSize: [57, 125],
            popupAnchor: [0, -30]
        });
        
        L.marker([-15.9899, -48.0500], {icon: myIconRed}).addTo(map).bindPopup('Proximo da UnB Gama')
            .openPopup();

        L.marker([-15.9899, -48.0443], {icon: myIcon}).addTo(map).bindPopup('UnB Gama')
            .openPopup();