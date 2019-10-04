var crashLayer = new L.LayerGroup();

var crashData = "https://data.cityofnewyork.us/resource/h9gi-nx95.geojson?$limit=10000";

// Grabbing our GeoJSON data..
d3.json(crashData, function (data) {
    // Creating a geoJSON layer with the retrieved data
    L.geoJson(data, {
        // Style each feature (in this case a neighborhood)
        pointToLayer: function (geoJsonPoint, latlng) {
            if (geoJsonPoint.properties && geoJsonPoint.properties.on_street_name && geoJsonPoint.properties.off_street_name) {
                return new L.circleMarker(latlng, {
                    fillColor: getColor(geoJsonPoint.properties.number_of_persons_killed),
                    weight: 0,
                    fillOpacity: 0.7,
                    radius: getRadius(geoJsonPoint.properties.number_of_persons_injured || geoJsonPoint.properties.number_of_persons_killed)
                });
            }    
        },
        onEachFeature: onEachFeature
    }).addTo(crashLayer);

    function onEachFeature(feature, layer) {
    //     // does this feature have a property named popupContent?
    //     // layer.bindPopup(`<h3>This is a test</h3>`);

        if (feature.properties && feature.properties.latitude && feature.properties.longitude) {
            layer.bindPopup(`<h5>VEHICLE COLLISIONS</h5><hr>
                <h6>Location: ${feature.properties.off_street_name} ON ${feature.properties.on_street_name}<br> Boro: ${feature.properties.borough}</h6>
                <text><b>Date:</b> ${feature.properties.date}<hr>
                <b>Injured/Killed</b><br>
                Persons Injured: ${feature.properties.number_of_persons_injured}<br>
                Persons Killed: <b>${feature.properties.number_of_persons_killed}</b><br>
                <hr>
                <b>Vehicles Involved</b><br>
                Vehicle 1: ${feature.properties.vehicle_type_code1}<br>
                Vehicle 2: ${feature.properties.vehicle_type_code2}<br>
                Vehicle 3: ${feature.properties.vehicle_type_code3}<br>
                <hr>
                <b>Contibuting Factors</b><br>
                Vehicle 1: ${feature.properties.contributing_factor_vehicle_1}<br>
                Vehicle 2: ${feature.properties.contributing_factor_vehicle_2}<br>
                Vehicle 3: ${feature.properties.contributing_factor_vehicle_3}<br>
                </text>`);
        }
        layer.on({
            mouseover: function (event) {
                layer = event.target;
                layer.setStyle({
                    fillColor: getColor(feature.properties.number_of_persons_killed),
                    radius: 10,
                    fillOpacity: 1,
                    color: "black",
                    weight: 2
                });

            },
            mouseout: function (event) {
                layer = event.target;
                layer.setStyle({
                    fillColor: getColor(feature.properties.number_of_persons_killed),
                    radius: getRadius(feature.properties.number_of_persons_injured || feature.properties.number_of_persons_killed),
                    fillOpacity: 0.7,
                    weight: 0
                });
            }
        })
    }

    function getColor(number_of_persons_killed) {
        switch (number_of_persons_killed) {
            case '0':
                return '#F1C40F';
            default:
                return '#D35400';
        }        
    }

    function getRadius(persons_injured_killed) {
        switch (persons_injured_killed) {
            case '0':
                return 4;
            case '1':
                return 5;
            case '2':
                return 6;
            case '3':
                return 7;
            case '4':
                return 8;
            default:
                return 9;
        }
    }
});