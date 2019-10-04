var markerData = "static/data/nyc.geojson";


// d3.json(markerData, function (data) {
//     // Creating a geoJSON layer with the retrieved data
//     L.geoJson(data, {
//         // Style each feature (in this case a neighborhood)
//         pointToLayer: function (geoJsonPoint, latlng) {
//             if (geoJsonPoint.properties && geoJsonPoint.properties.on_street_name && geoJsonPoint.properties.off_street_name) {
//                 return new L.Marker(latlng, {
//                     fillColor: getColor(geoJsonPoint.properties.number_of_persons_killed),
//                     weight: 0,
//                     fillOpacity: 0.7,
//                     radius: getRadius(geoJsonPoint.properties.number_of_persons_injured || geoJsonPoint.properties.number_of_persons_killed)
//                 });
//             }
//         },
//         onEachFeature: onEachFeature
//     }).addTo(crashLayer);
// });