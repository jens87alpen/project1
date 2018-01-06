$( document ).ready(function() {
  console.log( "ready!" );
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
       for (var i = 0; i < results.length; i++) {
        var breweryName = results[i].breweries[0].name;
        var beerName = results[i].name;
        var latitude = results[i].breweries[0].locations[0].latitude;
        var logitude = results[i].breweries[0].locations[0].longitude;
        console.log(results[i].name)
       }     
});

// .done(function(response) {
//       console.log(response);
//       var results = response.data;
//       for (var i = 0; i < results.length; i++) {
//         var gifDiv = $("<div class='item'>");
//         var rating =results[i].rating;
//         var paragraph = $('<p>').text("Rating: " + rating);
//         var personImage=$('<img>');
//         personImage.attr("class","gif");
//             personImage.attr("src", results[i].images.fixed_height_still.url);
//             personImage.attr("data-state","still")
//             personImage.attr("data-still", results[i].images.fixed_height_still.url);
//             personImage.attr("data-animate", results[i].images.fixed_height.url);
//             gifDiv.prepend(paragraph);
//             gifDiv.prepend(personImage);

//         $(".athlete-giph").prepend(gifDiv);
//       }
//     })
// })