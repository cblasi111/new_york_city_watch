var complaints = new L.LayerGroup();

var complaintData = "https://data.cityofnewyork.us/resource/qgea-i56i.geojson?$limit=10000";

// Grabbing our GeoJSON data..
d3.json(complaintData, function (data) {
    // Creating a geoJSON layer with the retrieved data
    L.geoJson(data, {
        // Style each feature (in this case a neighborhood)
        pointToLayer: function (geoJsonPoint, latlng) {
            return new L.circleMarker(latlng, {
                fillColor: getColor(geoJsonPoint.properties.law_cat_cd),
                weight: 0,
                fillOpacity: 0.8,
                radius: getRadius(geoJsonPoint.properties.vic_age_group)
            });
        },
        onEachFeature: onEachFeature
        }).addTo(complaints);

    function onEachFeature(feature, layer) {
        // does this feature have a property named popupContent?
        // layer.bindPopup(`<h3>This is a test</h3>`);
        
        if (feature.properties && feature.properties.pd_desc) {
            layer.bindPopup(`<h5>COMPLAINTS</h5><hr>
                <h6>${feature.properties.pd_desc}</h6>
                <text><b>Date:</b> ${feature.properties.rpt_dt}<br>
                <b>Law Category Code:</b> ${feature.properties.law_cat_cd}<br>
                <b>Borough:</b> ${feature.properties.boro_nm}<br>
                <b>Location:</b> ${feature.properties.loc_of_occur_desc} ${feature.properties.prem_typ_desc}<hr>
                <b>Suspect Age:</b> ${feature.properties.susp_age_group}<br>
                <b>Suspect Race:</b> ${feature.properties.susp_race}<br>
                <b>Suspect Gender:</b> ${feature.properties.susp_sex}<hr>
                <b>Victim Age:</b> ${feature.properties.vic_age_group}<br>
                <b>Victim Race:</b> ${feature.properties.vic_race}<br>
                <b>Victim Gender:</b> ${feature.properties.vic_sex}</text>`);
        }
        layer.on({
            mouseover: function (event) {
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
                    radius: getRadius(feature.properties.vic_age_group),
                    fillOpacity: 0.8,
                    weight: 0
                });
            }
        })
    }
    
    function getColor(law_cat_cd) {
        switch (law_cat_cd) {
            case 'VIOLATION':
                return "#EBDEF0";
            case 'MISDEMEANOR':
                return "#AF7AC5";
            case 'FELONY':
                return "#633974";
            // default:
            //     return "#A9CCE3";
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
});