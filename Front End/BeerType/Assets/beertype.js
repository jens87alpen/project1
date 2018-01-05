

	$('.submit').on('click', function() {

		$('.submit').fadeOut(500);
		$('.background').fadeOut(500);
		$('.question1').fadeIn(700);	
	});	

	
	$('.question1').on('click', function() {

		$('.question1').remove();
		$('.question2').fadeIn(700);		
	});


	$('.question2').on('click', function() {

		$('.question2').remove();
		$('.question3').fadeIn(700);		
	});

	$('.question3').on('click', function() {

		$('.question3').remove();
		$('.question4').fadeIn(700);		
	});

	$('.question4').on('click', function() {

		$('.question4').remove();
		$('.question5').fadeIn(700);		
	});

	$('.question5').on('click', function() {

		$('.question5').remove();
		$('.question6').fadeIn(700);		
	});
	
	

	
		

	
	