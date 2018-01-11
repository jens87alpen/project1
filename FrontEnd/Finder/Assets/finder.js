$(document).ready(function() {
    

    console.log("ready!");

    var map = L.map('map').setView([37.6872, -97.3301], 5);

    function makeRequest(pageNumber) {
        var breweryParam = 'withBreweries=Y'
        var beers = 'beers'
        var proxyURL = "https://desolate-tundra-96867.herokuapp.com/"
        var styleId = "styleId=30" //"styleId=42" (is stout)
        var queryURL = proxyURL + "http://api.brewerydb.com/v2/"+beers+"?"+styleId+"&"+breweryParam+"&hasLabels=Y&key=713fb2a8f0394ecbc7450f65473cca9a&p=" + pageNumber;

        $.ajax({
            url: queryURL,
            method: "GET"
        })


        .done(function(response) {
            console.log(response);
            var results = response.data;
            console.log(response.data);
            var allPages = response.currentPage;
            var numberOfPages = 1;//response.numberOfPages;
            console.log(pageNumber);



            

            var resultsArr = [];
            for (var i = 0; i < results.length; i++) {

                var breweryName = results[i].breweries[0].name;
                var beerName = results[i].name;
                var latitude = results[i].breweries[0].locations[0].latitude;
                var longitude = results[i].breweries[0].locations[0].longitude;
                var street = results[i].breweries[0].locations[0].streetAddress;
                var city = results[i].breweries[0].locations[0].locality;
                var state = results[i].breweries[0].locations[0].region;
                var zip = results[i].breweries[0].locations[0].postalCode;
                if (results[i].breweries[0].images && results[i].breweries[0].images.icon) {
                    var image = results[i].breweries[0].images.icon;
                    console.log(image);
                } else {
                    var image = "http://icons.iconarchive.com/icons/icons8/windows-8/256/Food-Beer-icon.png"
                }
                


                var singleArr = [];
                singleArr.push(breweryName);
                singleArr.push(beerName);
                singleArr.push(latitude);
                singleArr.push(longitude);
                singleArr.push(street);
                singleArr.push(city);
                singleArr.push(state);
                singleArr.push(zip);
                singleArr.push(image);

           

                resultsArr.push(singleArr);
            }
          
            console.log(resultsArr)
            
            mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
            
            L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + mapLink + ' Contributors',
                maxZoom: 10,
            }).addTo(map);

            for (var i = 0; i < resultsArr.length; i++) {
                marker = new L.marker([resultsArr[i][2], resultsArr[i][3]])
                    .bindPopup("<img src="+resultsArr[i][8]+"><br><br>"+"<b>" + resultsArr[i][0] + "</b><br>" + resultsArr[i][1]+"<br>"+resultsArr[i][4]+"<br>"+
                        resultsArr[i][5]+", "+resultsArr[i][6]+" "+resultsArr[i][7])
                    .addTo(map);
            }
        // used to make all the pages load. too slow for app.
            if (numberOfPages >  pageNumber) {
                makeRequest(++pageNumber);
            }
               
        });
                 
    }
    makeRequest(0);

     // Locate user location // 
    map.locate({ setView: true, maxZoom: 8 });

    function onLocationFound(e) {
        var radius = e.accuracy / 2;
        L.marker(e.latlng).addTo(map).bindPopup("Your Location").openPopup();
        L.circle(e.latlng, radius).addTo(map);
    }

    map.on('locationfound', onLocationFound);
    
    // function onLocationError(e) {
    //     alert(e.message);
    // }

    // map.on('locationerror', onLocationError);

     //////////////// OSMGeocoder JS -- adds searchbox and functionality ////////////////
    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});
    // var map = new L.Map('map').addLayer(osm).setView([48.5, 2.5], 15);

    var osmGeocoder = new L.Control.OSMGeocoder({placeholder: 'Search location...'});

    map.addControl(osmGeocoder);

});


$(".submit").on("click", function() {
        $("#map").fadeIn();
        $(".submit").hide();
    });