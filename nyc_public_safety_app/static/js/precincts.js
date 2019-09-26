var precinctData = "static/data/PolicePrecincts.geojson"
// Function that will determine the color of a neighborhood based on the borough it belongs to
var precinctLayer = new L.LayerGroup()

// Grabbing our GeoJSON data..
d3.json(precinctData, function (data) {
    // Creating a geoJSON layer with the retrieved data
    L.geoJson(data, {
        // Style each feature (in this case a neighborhood)
        style: function (feature) {
            return {
                color: "black",
                // Call the chooseColor function to decide which color to color our neighborhood (color based on borough)
                fillColor: "grey",
                fillOpacity: 0.1,
                weight: 1
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
                        fillOpacity: 0.6
                    });
                },
                // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
                mouseout: function (event) {
                    layer = event.target;
                    layer.setStyle({
                        fillOpacity: 0.1
                    });
                },
                // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
                // click: function(event) {
                //   map.fitBounds(event.target.getBounds());
                // }
            });
            // Giving each feature a pop-up with information pertinent to it
            layer.bindPopup("<h3> NYPD Precinct </h3> <hr> <h3>" + feature.properties.precinct + "</h3>");

        }
    }).addTo(precinctLayer);
});