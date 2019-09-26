var summonsLayer = new L.LayerGroup();

var summonsData = "https://data.cityofnewyork.us/resource/sv2w-rv3k.json?$limit=10000";

d3.json(summonsData, function (response) {

    // console.log(response);

    let jsonFeatures = [];


    response.forEach(function (point) {
        let lat = point.latitude;
        let lon = point.longitude;
        let date = point.summons_date;
        let off_desc = point.offense_description;
        let age = point.age_group;
        let gender = point.sex;
        let race = point.race;
        let boro = point.boro;


        let feature = {
            type: 'Feature',
            properties: {
              summons_date: date,
              offense_description: off_desc,
              age_group: age,
              sex: gender,
              race: race,
              boro: boro
            },
            geometry: {
                type: 'Point',
                coordinates: [lon, lat]
            }

        };

        jsonFeatures.push(feature);
    });

    function onEachFeature(feature, layer) {
      // does this feature have a property named popupContent?
    //   layer.bindPopup(`this is a test`);
      
        if (feature.properties && feature.properties.offense_description) {
            layer.bindPopup(`<h5>COURT SUMMONS</h5><hr>
                <h6>${feature.properties.offense_description}</h6><hr>
                <text><b>Date:</b> ${feature.properties.summons_date}<br>
                <b>Borough:</b> ${feature.properties.boro}<br>
                <b>Age:</b> ${feature.properties.age_group}<br>
                <b>Race:</b> ${feature.properties.race}<br>
                <b>Gender:</b> ${feature.properties.sex}</text>`);
        }
        layer.on({
            mouseover: function (event) {
                layer = event.target;
                layer.setStyle({
                    fillColor: getColor(feature.properties.sex),
                    radius: 10,
                    fillOpacity: 1,
                    color: "black",
                    weight: 2
                });

            },
            mouseout: function (event) {
                layer = event.target;
                layer.setStyle({
                    fillColor: getColor(feature.properties.sex),
                    radius: getRadius(feature.properties.age_group),
                    fillOpacity: 0.7,
                    weight: 0
                });
            }
        })

      
    }

    function getColor(gender) {
        switch (gender) {
            case 'M':
                return "#DC7633";
            case 'F':
                return "#E59866";
            case 'D':
                return "#FBEEE6";
            default:
                return "#FBEEE6";
        }
    }

    function getRadius(age_group) {
        switch (age_group) {
            case '65+':
                return 6;
            case '45-64':
                return 5;
            case '25-44':
                return 4;
            case '18-24':
                return 3;
            case '<18':
                return 2;
            default:
                return 2;
        }
    }

    let geoJson = { type: 'FeatureCollection', features: jsonFeatures };
    // console.log(geoJson)
    setTimeout(function () {
        L.geoJson(geoJson, {
            pointToLayer: function (geoJsonPoint, latlng) {
                return new L.circleMarker(latlng, {
                    fillColor: getColor(geoJsonPoint.properties.sex),
                    weight: 0,
                    fillOpacity: 0.7,
                    radius: getRadius(geoJsonPoint.properties.age_group)
                });
            },
            onEachFeature: onEachFeature
        }).addTo(summonsLayer);
    }, 0);
});

// School Data Test -------------------------