$(document).ready(function(){

  var config = {
    apiKey: "AIzaSyDuM7vss1KajJFTK65hagWBSCWaf7AvXtM",
    authDomain: "beer-club-dd7ec.firebaseapp.com",
    databaseURL: "https://beer-club-dd7ec.firebaseio.com",
    projectId: "beer-club-dd7ec",
    storageBucket: "",
    messagingSenderId: "19458287127"
}

    firebase.initializeApp(config);

 
    var database = firebase.database();


    // Capture Button Click
    $("#submitButton").on("click", function(event) {
          event.preventDefault();
          
                    
          var newPersonName = $("#personName").val().trim();
          var newPersonEmail = $("#personEmail").val().trim();
          

          
          var newPerson = {
            personName: newPersonName,
            personEmail: newPersonEmail,
            timeAdded: firebase.database.ServerValue.TIMESTAMP
            
          };

          // Code for the push
          database.ref().push(newPerson);
     
    });


    database.ref().on("child_added", function(childSnapshot) {
      console.log(childSnapshot.val());
      
      var newPersonName = childSnapshot.val().personName;
      var newPersonEmail = childSnapshot.val().personEmail;
      
    });

});