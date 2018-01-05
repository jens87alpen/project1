document.addEventListener('DOMContentLoaded', bind);

function bind() {
    var el = document.getElementById('beerSub');
    el.addEventListener('click', function(event) {
        var base = "http://api.brewerydb.com/v2"
        var beerName = document.getElementById('br').value;
        var bts = beerName.split(' ').join('%20');
        var type = "&type=beer";
        var key = "&key=2e10788536db6bc8ca751b72291ba1dc";
        var search = "/search?q=";
        var fullUrl = base + search + bts + type + key;
        var req = new XMLHttpRequest();
        req.open("GET", fullUrl, true);

        req.send(null);
        req.addEventListener('load', function() {
            var response = JSON.parse(req.responseText);
            document.getElementById("sb").textContent = response.data[0].name;
            document.getElementById("id").textContent = response.data[0].id;
            //We begin making the new request here, inside the first!
            var beer = /beer/;
            var brew = "?withBreweries=y"
            var id = response.data[0].id;
            var newUrl = base + beer + id + brew + key
            var req2 = new XMLHttpRequest();
            req2.open("GET", newUrl, true);
            req2.send(null);
            req2.addEventListener('load', function() {
                var response2 = JSON.parse(req2.responseText); //parse the response tex
                console.log(response2);
                document.getElementById("brew").textContent = response2.data.breweries[0].name;
                var street = response2.data.breweries[0].locations[0].streetAddress;
                var city = response2.data.breweries[0].locations[0].locality;
                var state = response2.data.breweries[0].locations[0].region;
                var zip = response2.data.breweries[0].locations[0].postalCode;
                var fullAddr = street + ', ' + city + ', ' + state + ' ' + zip;
                document.getElementById("loc").textContent = fullAddr;
                document.getElementById("brewImg").src = response2.data.breweries[0].images.large;

            });

        });
        event.preventDefault();
    });
};