var link = "static/data/nyc.geojson"
// Function that will determine the color of a neighborhood based on the borough it belongs to
function chooseColor(borough) {
    switch (borough) {
        case "Brooklyn":
            return "green";
        case "Bronx":
            return "orange";
        case "Manhattan":
            return "DarkBlue";
        case "Queens":
            return "Crimson";
        case "Staten Island":
            return "Chocolate";
        default:
            return "black";
    }
}

var boroughs = new L.LayerGroup()

// Grabbing our GeoJSON data..
d3.json(link, function (data) {
    // Creating a geoJSON layer with the retrieved data
    L.geoJson(data, {
        // Style each feature (in this case a neighborhood)
        style: function (feature) {
            return {
                color: "white",
                // Call the chooseColor function to decide which color to color our neighborhood (color based on borough)
                fillColor: chooseColor(feature.properties.borough),
                fillOpacity: 0.4,
                weight: 1.5
            };
        },
        // Called on each feature
        onEachFeature: function (feature, layer) {
            // Set mouse events to change map styling
            layer.on({
                // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
                mouseover: function (event) {
                    layer = event.target;
                    layer.setStyle({
                        fillOpacity: 0.9
                    });
                },
                // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
                mouseout: function (event) {
                    layer = event.target;
                    layer.setStyle({
                        fillOpacity: 0.4
                    });
                },
                // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
                // click: function(event) {
                //   map.fitBounds(event.target.getBounds());
                // }
            });
            // Giving each feature a pop-up with information pertinent to it
            layer.bindPopup("<h3>" + feature.properties.neighborhood + "</h3> <hr> <h3>" + feature.properties.borough + "</h3>");

        }
    }).addTo(boroughs);
});