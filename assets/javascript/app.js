    $(document).ready(function() {
        console.log("ready!");
    });

    var beer = $(this).attr("data-name");
    var proxyURL = "https://desolate-tundra-96867.herokuapp.com/"
    var queryURL = proxyURL + "http://api.brewerydb.com/v2/beers?styleId=30&withBreweries=Y&key=2e10788536db6bc8ca751b72291ba1dc";

    $.ajax({
            url: queryURL,
            method: "GET"
        })

        .done(function(response) {
            console.log(response);
            var results = response.data;

            var resultsArr = [];
            for (var i = 0; i < results.length; i++) {
                var breweryName = results[i].breweries[0].name;
                var beerName = results[i].name;
                var latitude = results[i].breweries[0].locations[0].latitude;
                var longitude = results[i].breweries[0].locations[0].longitude;

                var singleArr = [];
                singleArr.push(breweryName);
                singleArr.push(beerName);
                singleArr.push(latitude);
                singleArr.push(longitude);

                resultsArr.push(singleArr);
            }

            console.log(resultsArr)
            var map = L.map('map').setView([37.6872, -97.3301], 5);
            mapLink =
                '<a href="http://openstreetmap.org">OpenStreetMap</a>';
            L.tileLayer(
                'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; ' + mapLink + ' Contributors',
                    maxZoom: 18,
                }).addTo(map);

            for (var i = 0; i < resultsArr.length; i++) {
                marker = new L.marker([resultsArr[i][2], resultsArr[i][3]])
                    .bindPopup("<b>" + resultsArr[i][0] + "</b><br>" + resultsArr[i][1])


                    .addTo(map);
            }
            // Locate user location // 
            map.locate({ setView: true, maxZoom: 8 });

            function onLocationFound(e) {
                var radius = e.accuracy / 2;

                L.marker(e.latlng).addTo(map)
                    .bindPopup("Your Location").openPopup();

                L.circle(e.latlng, radius).addTo(map);
            }

            map.on('locationfound', onLocationFound);

            function onLocationError(e) {
                alert(e.message);
            }

            map.on('locationerror', onLocationError);


        });