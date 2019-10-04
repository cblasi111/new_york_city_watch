// Shootings Data ------------------------

var shootingsLayer = new L.LayerGroup();

var shootingData = "https://data.cityofnewyork.us/resource/833y-fsy8.json?$limit=10000";

d3.json(shootingData, function (response) {

    // console.log(response);

    let jsonFeatures = [];


    response.forEach(function (point) {
        let lat = point.latitude;
        let lon = point.longitude;
        let date = point.occur_date;
        let time = point.occur_time;
        let boro = point.boro;
        let location = point.location_desc;
        let flag = point.statistical_murder_flag;
        let perp_age = point.perp_age_group;
        let perp_sex = point.perp_sex;
        let perp_race = point.perp_race;
        let vic_age = point.vic_age_group;
        let vic_sex = point.vic_sex;
        let vic_race = point.vic_race;

        let feature = {
            type: 'Feature',
            properties: {
              occur_date: date,
              occur_time: time,
              boro: boro,
              location_desc: location,
              statistical_murder_flag: flag,
              perp_age_group: perp_age,
              perp_sex: perp_sex,
              perp_race: perp_race,
              vic_age_group: vic_age,
              vic_sex: vic_sex,
              vic_race: vic_race  
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
        // layer.bindPopup(`<h3>SHOOTINGS</h3><hr><h4>Borough: ${feature.properties.boro}<br>Location Description: ${feature.properties.location_desc}<br>Date: ${feature.properties.occur_date}</h4><h4>Time: ${feature.properties.occur_time}<br>Suspect Race: ${feature.properties.perp_race}<br>Suspect Gender: ${feature.properties.perp_sex}<br>Fatal: ${feature.properties.statistical_murder_flag}</h4>`);
        
        if (feature.properties && feature.properties.location_desc) {
            layer.bindPopup(`<h5>SHOOTINGS</h5><hr>
            <text><b>Date:</b> ${feature.properties.occur_date}<br>
                <b>Time:</b> ${feature.properties.occur_time}<br>
                <b>Fatal:</b> ${feature.properties.statistical_murder_flag}<br><br>
                <b>Borough:</b> ${feature.properties.boro}<br>
                <b>Location:</b> ${feature.properties.location_desc}<br>
                <b>Suspect Age:</b> ${feature.properties.perp_age_group}<hr>
                <b>Suspect Race:</b> ${feature.properties.perp_race}<br>
                <b>Suspect Gender:</b> ${feature.properties.perp_sex}<hr>
                <b>Victim Age:</b> ${feature.properties.vic_age_group}<br>
                <b>Victim Race:</b> ${feature.properties.vic_race}<br>
                <b>Victim Gender:</b> ${feature.properties.vic_sex}</text>`);
        }
        layer.on({
            mouseover: function (event) {
                layer = event.target;
                layer.setStyle({
                    fillColor: getColor(feature.properties.statistical_murder_flag),
                    radius: 10,
                    fillOpacity: 1,
                    color: "black",
                    weight: 2
                });

            },
            mouseout: function (event) {
                layer = event.target;
                layer.setStyle({
                    fillColor: getColor(feature.properties.statistical_murder_flag),
                    radius: getRadius(feature.properties.vic_age_group),
                    fillOpacity: 0.8,
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
            default:
                return 2;
        }
    }

    function getColor(flag) {
        switch (flag) {
            case true:
                return "#922B21";
            case false:
                return "#E6B0AA";
            // default:
            //     return "#EF9A9A";
        }
    }


    let geoJson = { type: 'FeatureCollection', features: jsonFeatures };
    // console.log(geoJson)
    setTimeout(function () {
        L.geoJson(geoJson, {
            onEachFeature: onEachFeature,
            pointToLayer: function (geoJsonPoint, latlng) {
                if (geoJsonPoint.properties && geoJsonPoint.properties.location_desc) {
                    return new L.circleMarker(latlng, {
                        fillColor: getColor(geoJsonPoint.properties.statistical_murder_flag),
                        weight: 0,
                        fillOpacity: 0.8,
                        radius: getRadius(geoJsonPoint.properties.vic_age_group)
                    });
                }
                
            },
        }).addTo(shootingsLayer);
    }, 0);
});

// Shootings Data -------------------------