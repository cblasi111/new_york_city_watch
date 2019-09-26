// var light = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.light",
//   accessToken: API_KEY
// });

// var dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.dark",
//   accessToken: API_KEY
// });

// var baseMaps = {
//   Light: light,
//   Dark: dark
// };

// var overlayMaps = {
//   Arrests: test
// };

// var map = L.map("map", {
//   center: [40.71, -74.00],
//   zoom: 10,
//   layers: [light]
// });

// // Pass our map layers into our layer control
// // Add the layer control to the map
// L.control.layers(baseMaps, overlayMaps).addTo(map);

// var link = "static/data/nyc.geojson"
// // Function that will determine the color of a neighborhood based on the borough it belongs to
// function chooseColor(borough) {
//   switch (borough) {
//   case "Brooklyn":
//     return "green";
//   case "Bronx":
//     return "orange";
//   case "Manhattan":
//     return "DarkBlue";
//   case "Queens":
//     return "Crimson";
//   case "Staten Island":
//     return "Chocolate";
//   default:
//     return "black";
//   }
// }

// var boroughs = new L.LayerGroup()

// // Grabbing our GeoJSON data..
// d3.json(link, function(data) {
//   // Creating a geoJSON layer with the retrieved data
//   L.geoJson(data, {
//     // Style each feature (in this case a neighborhood)
//     style: function(feature) {
//       return {
//         color: "white",
//         // Call the chooseColor function to decide which color to color our neighborhood (color based on borough)
//         fillColor: chooseColor(feature.properties.borough),
//         fillOpacity: 0.4,
//         weight: 1.5
//       };
//     },
//     // Called on each feature
//     onEachFeature: function(feature, layer) {
//       // Set mouse events to change map styling
//       layer.on({
//         // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
//         mouseover: function(event) {
//           layer = event.target;
//           layer.setStyle({
//             fillOpacity: 0.9
//           });
//         },
//         // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
//         mouseout: function(event) {
//           layer = event.target;
//           layer.setStyle({
//             fillOpacity: 0.4
//           });
//         },
//         // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
//         // click: function(event) {
//         //   map.fitBounds(event.target.getBounds());
//         // }
//       });
//       // Giving each feature a pop-up with information pertinent to it
//       layer.bindPopup("<h3>" + feature.properties.neighborhood + "</h3> <hr> <h3>" + feature.properties.borough + "</h3>");

//     }
//   }).addTo(boroughs);
// });

// var test = new L.LayerGroup();

// var newtry = "https://data.cityofnewyork.us/resource/8h9b-rp9u.json?$limit=2000";

// d3.json(newtry, function (response) {

//   // console.log(response);

//   let jsonFeatures = [];

//   response.forEach(function (point) {
//     let lat = point.latitude;
//     let lon = point.longitude;
//     let desc = point.pd_desc;
//     let age = point.age_group;
//     let gender = point.perp_sex;

//     let feature = {
//       type: 'Feature',
//       properties: {
//         pd_desc: desc,
//         age_group: age,
//         perp_sex: gender
//       },
//       geometry: {
//         type: 'Point',
//         coordinates: [lon, lat]
//       },
//     };

//     jsonFeatures.push(feature);
//   });

//   function onEachFeature(feature, layer) {
//     // does this feature have a property named popupContent?
//     if (feature.properties && feature.properties.pd_desc && feature.properties.age_group && feature.properties.perp_sex) {
//       layer.bindPopup(`<h3>${feature.properties.pd_desc}<hr>Age: ${feature.properties.age_group}<br>Gender: ${feature.properties.perp_sex}</h3>`);
//     }
//   }

//   function getOpacity(age_group) {
//     switch (age_group) {
//       case '65+':
//         return "#5DADE2";
//       case '45-64':
//         return "#3498DB";
//       case '25-44':
//         return "#2E86C1";
//       case '18-24':
//         return "#2874A6";
//       case '<18':
//         return "#21618C";
//       default:
//         return "#1B4F72";
//     }
//   }

//   let geoJson = { type: 'FeatureCollection', features: jsonFeatures };
//   // console.log(geoJson)

//   setTimeout(function() {
//     L.geoJson(geoJson, {
//     onEachFeature: onEachFeature,
//     pointToLayer: function(geoJsonPoint, latlng) {
//       return new L.circleMarker(latlng, {
//         fillColor: getOpacity(geoJsonPoint.properties.age_group),
//         weight: 0,
//         fillOpacity: 0.3,
//         radius: 6
//       });
//     }, 
//   }).addTo(test);
//   }, 0);
// });

// School Data Test ------------------------

// var shootingsLayer = new L.LayerGroup();

// var shootingData = "https://data.cityofnewyork.us/resource/833y-fsy8.json?$limit=1000";

// d3.json(shootingData, function (response) {

//   // console.log(response);

//   let jsonFeatures = [];


//   response.forEach(function (point) {
//     let lat = point.latitude;
//     let lon = point.longitude;
//     // var desc = point.pd_desc;
//     // var age = point.age_group;
//     // var gender = point.perp_sex;

//     let feature = {
//       type: 'Feature',
//       properties: point,
//       // {
//       //   pd_desc: desc,
//       //   age_group: age,
//       //   perp_sex: gender
//       // },
//       geometry: {
//         type: 'Point',
//         coordinates: [lon, lat]
//       }

//     };

//     jsonFeatures.push(feature);
//   });

//   // function onEachFeature(feature, layer) {
//   //   // does this feature have a property named popupContent?
//   //   if (feature.properties && feature.properties.pd_desc && feature.properties.age_group && feature.properties.perp_sex) {
//   //     layer.bindPopup(`<h3>${feature.properties.pd_desc}<hr>Age: ${feature.properties.age_group}<br>Gender: ${feature.properties.perp_sex}</h3>`);
//   //   }
//   // }

//   // function getOpacity(age_group) {
//   //   switch (age_group) {
//   //     case '65+':
//   //       return "#5DADE2";
//   //     case '45-64':
//   //       return "#3498DB";
//   //     case '25-44':
//   //       return "#2E86C1";
//   //     case '18-24':
//   //       return "#2874A6";
//   //     case '<18':
//   //       return "#21618C";
//   //     default:
//   //       return "#1B4F72";
//   //   }
//   // }

//   let geoJson = { type: 'FeatureCollection', features: jsonFeatures };
//   // console.log(geoJson)
//   setTimeout(function () {
//     L.geoJson(geoJson, {
//       // onEachFeature: onEachFeature,
//       pointToLayer: function (geoJsonPoint, latlng) {
//         return new L.circleMarker(latlng, {
//           fillColor: "red",
//           weight: 0,
//           fillOpacity: 0.3,
//           radius: 6
//         });
//       },
//     }).addTo(shootingsLayer);
//   }, 0);
// });

// School Data Test -------------------------


var light = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
});

var dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
});

var baseMaps = {
    Light: light,
    Dark: dark
};

var overlayMaps = {
    Boroughs: boroughs,
    Arrests: test,
    Shootings: shootingsLayer,
    Complaints: complaints,
    Summons: summonsLayer,
    Crashes: crashLayer,
    Precinct: precinctLayer,
};

var map = L.map("map", {
    center: [40.71, -74.00],
    zoom: 11,
    layers: [light]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps).addTo(map);