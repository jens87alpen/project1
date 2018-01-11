
 $(document).ready(function() {

 	$(".button").on("click", function() {
    	$(".hide-button").hide(800);
    });

    $(".button").on("click", function() {
    	$(".button").hide(1000);
    });

     $(".button").on("click", function() {
    	$("#text").fadeIn(3000);
    });


    $(".button1").on("click", function() {
    	$(".hide-text1").hide();
    });


     $(".button1").on("click", function() {
    	$(".text2").fadeIn();
    });

     $(".button").on("click", function() {
        $(".text2").fadeIn();
    });



 });