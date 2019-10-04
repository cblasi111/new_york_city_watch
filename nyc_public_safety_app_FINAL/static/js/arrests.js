var test = new L.LayerGroup();

var newtry = "https://data.cityofnewyork.us/resource/8h9b-rp9u.json?$limit=10000";

d3.json(newtry, function (response) {

    // console.log(response);

    let jsonFeatures = [];

    response.forEach(function (point) {
        let lat = point.latitude;
        let lon = point.longitude;
        let desc = point.pd_desc;
        let age = point.age_group;
        let gender = point.perp_sex;
        let code = point.law_code;
        let cat = point.law_cat_cd
        let race = point.perp_race;
        let date = point.arrest_date;

        let feature = {
            type: 'Feature',
            properties: {
                pd_desc: desc,
                age_group: age,
                perp_sex: gender,
                law_cat_cd: cat,
                law_code: code,
                perp_race: race,
                arrest_date: date
            },
            geometry: {
                type: 'Point',
                coordinates: [lon, lat]
            },
        };

        jsonFeatures.push(feature);
    });

    function onEachFeature(feature, layer) {
        // does this feature have a property named popupContent?
        
        if (feature.properties && feature.properties.pd_desc && feature.properties.age_group && feature.properties.perp_sex) {
            layer.bindPopup(`<h5>ARRESTS</h5><hr>
                <h6>${feature.properties.pd_desc}</h6><hr>
                <text><b>Date:</b> ${feature.properties.arrest_date}<br>
                <b>Age:</b> ${feature.properties.age_group}<br>
                <b>Race:</b> ${feature.properties.perp_race}<br>
                <b>Gender:</b> ${feature.properties.perp_sex}<br>
                <b>Law Code:</b> ${feature.properties.law_code}<br>
                <b>Law Category Code:</b> ${feature.properties.law_cat_cd}</text>`);
        }
        layer.on({
            mouseover: function(event) {
                layer = event.target;
                layer.setStyle({
                    fillColor: getColor(feature.properties.law_cat_cd),
                    radius: 10,
                    fillOpacity: 1,
                    color: "black",
                    weight: 2
                });

            },
            mouseout: function (event) {
                layer = event.target;
                layer.setStyle({
                    fillColor: getColor(feature.properties.law_cat_cd),
                    radius: getRadius(feature.properties.age_group),
                    fillOpacity: 0.6,
                    weight: 0
                });
            }
        })
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
            // default:
            //     return 2;
        }
    }

    function getColor(law_cat_cd) {
        switch (law_cat_cd) {
            case 'V':
                return "#A9CCE3";
            case 'M':
                return "#5499C7";
            case 'F':
                return "#21618C";
            default:
                return "#A9CCE3";
        }
    }

    let geoJson = { type: 'FeatureCollection', features: jsonFeatures };
    // console.log(geoJson)
    // var div_circle = L.divIcon({ className: 'circle' })

    setTimeout(function () {
        L.geoJson(geoJson, {
            onEachFeature: onEachFeature,
            pointToLayer: function (geoJsonPoint, latlng) {
                return new L.circleMarker(latlng, {
                    // icon: div_circle,
                    // className: 'shadow',
                    fillColor: getColor(geoJsonPoint.properties.law_cat_cd),
                    fillOpacity: 0.6,
                    weight: 0,
                    radius: getRadius(geoJsonPoint.properties.age_group),
                });
            },
        }).addTo(test);
    }, 0);

    // var div_circle = L.divIcon({ className: 'circle' })

    // var marker = L.marker([51.509, -0.08],
    //     { icon: div_circle }
    // ).addTo(mymap);
});

