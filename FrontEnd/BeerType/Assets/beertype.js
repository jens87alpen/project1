// 3 Beer Styles = 1)Ale, 2)Stout, 3)Lager



var questions = 
{
		q1:['What do you prefer on a Friday night?'], 
		q2:['How does your ideal weekend look like?'], 
		q3:['How would you describe your group of friends?'], 
		q4:['What one word would your friends use to describe you?'],
		q5:['What is your favorite non-alcoholic drink?'],
		q6:['You go to a restaurant you were last week - what do you order?']
};
		
var answers = 
{
		answers1: [{1 : 'Hanging out with close friends', 
					2 : 'At a party', 
		   			3 : 'Checking out the newest trendy bar'
		   		  }],
		
		
		answers2: [{1 :'Backpacking trip on a perfect spring weekend', 
					2  :'Vegas, baby!', 
					3  :'Relaxing at the beach'
				}],
		
		
		answers3: [{1 :'I have a small group of friends', 
					2  :"I'm one of those people who knows everyone", 
					3  :'I would consider myself part of the "in"'
				}],


		answers4: [{1 :'Lively', 
					2  :'Chill', 
					3  :'Unique'
				}],

		answers5: [{1 :'Soda', 
					2  :'Coffee', 
					3  :'Lemonade'
				}],

		answers6: [{1 :'What sounds good', 
					2  :'Same thing I always have!', 
					3  :'Something different - gotta change it up'
				}]
};

var isCorrect = false;
	var questCnt = 0;
	var Ale = 0;
	var Stout = 0;
	var correctAnswer;
	var wrongAnswers;
	var intervalId;

console.log(correctAnswer);

	function startGame() {

		
	}

	

	function gamePlay() {

		$('.startBtn').on('click', function() {

			$('.startBtn').hide();
			$('.intro').hide();
			
			timeCount();
			quest1();
			chooseCheckAnswer();

		});	
	}

	

	function timeCount() {
		
		time = 1114;
		interval = setInterval(timeRemaining,1000);
		
	}

	//prints time remaining and once it = 0 it stops
	function timeRemaining() {
		
		//Decrement time 1 sec
		time--;
		//prints time remaining
		$('.timerCountDown').text(time + ' seconds');
		console.log(time);
		
		if (time === 0) {
			console.log(true);
	        //stops time
	        clearInterval(interval);

	        $('button').remove();
	        $('.questionInput').remove();

	        $('.btnContainer').append('<div class="timeIsUp">Time is up </div>');

	        dispAns();
	    } 
	}

	
	function dispAns() {

		if(questCnt === 1 && isCorrect == false) {
			Stout++;

			var newDiv = $('<div class="corAnsw">');
			

			setTimeout(function() {
				
				$('div').remove('.corAnsw');
				$('div').remove('.timeRem');
				$('div').remove('.timeIsUp');
				
				timeCount();
				quest2();
				chooseCheckAnswer();

			}, 500);
		}
		
		else if(questCnt === 1 && isCorrect === true) {
			Ale++;

			var newDiv = $('<div class="corAnsw">');
			

			setTimeout(function() {
				isCorrect = false;

				$('div').remove('.corAnsw');
				$('div').remove('.timeRem');
				$('div').remove('.timeIsUp');

				timeCount();
				quest2();
				chooseCheckAnswer();
			}, 500);
		}

		else if(questCnt === 2 && isCorrect == false) {
			Stout++;

			var newDiv = $('<div class="corAnsw">');
			

			setTimeout(function() {
				
				isCorrect = false;
				$('div').remove('.corAnsw');
				$('div').remove('.timeRem');
				$('div').remove('.timeIsUp');
				
				timeCount();
				quest3();
				chooseCheckAnswer();

			}, 500);
		}

		else if(questCnt === 2 && isCorrect === true) {
			Ale++;

			var newDiv = $('<div class="corAnsw">');
			

			setTimeout(function() {
				isCorrect = false;

				$('div').remove('.corAnsw');
				$('div').remove('.timeRem');
				$('div').remove('.timeIsUp');

				timeCount();
				quest3();
				chooseCheckAnswer();
			}, 500);
		}
		

		if(questCnt === 3 && isCorrect == false) {
			Stout++;

			var newDiv = $('<div class="corAnsw">');
			
			setTimeout(function() {
				
				isCorrect = false;
				$('div').remove('.corAnsw');
				$('div').remove('.timeRem');
				$('div').remove('.timeIsUp');
				
				timeCount();
				quest4();
				chooseCheckAnswer();

			}, 500);
		}

		else if(questCnt === 3 && isCorrect === true) {
			Ale++;

			var newDiv = $('<div class="corAnsw">');
			

			setTimeout(function() {
				isCorrect = false;

				$('div').remove('.corAnsw');
				$('div').remove('.timeRem');
				$('div').remove('.timeIsUp');

				timeCount();
				quest4();
				chooseCheckAnswer();
			}, 500);
		}


		if(questCnt === 4 && isCorrect == false) {
			Stout++;

			var newDiv = $('<div class="corAnsw">');
			

			setTimeout(function() {
				
				isCorrect = false;
				$('div').remove('.corAnsw');
				$('div').remove('.timeRem');
				$('div').remove('.timeIsUp');
				
				timeCount();
				quest5();
				chooseCheckAnswer();

			}, 500);
		}

		else if(questCnt === 4 && isCorrect === true) {
			Ale++;

			var newDiv = $('<div class="corAnsw">');
			

			setTimeout(function() {
				isCorrect = false;

				$('div').remove('.corAnsw');
				$('div').remove('.timeRem');
				$('div').remove('.timeIsUp');

				timeCount();
				quest5();
				chooseCheckAnswer();
			}, 500);
		}


		if(questCnt === 5 && isCorrect == false) {
			Stout++;

			var newDiv = $('<div class="corAnsw">');
			
			setTimeout(function() {
				
				isCorrect = false;
				$('div').remove('.corAnsw');
				$('div').remove('.timeRem');
				$('div').remove('.timeIsUp');
				
				timeCount();
				quest6();
				chooseCheckAnswer();

			}, 500);
		}

		else if(questCnt === 5 && isCorrect === true) {
			Ale++;

			var newDiv = $('<div class="corAnsw">');
			

			setTimeout(function() {
				isCorrect = false;

				$('div').remove('.corAnsw');
				$('div').remove('.timeRem');
				$('div').remove('.timeIsUp');

				timeCount();
				quest6();
				chooseCheckAnswer();
			}, 500);
		}


		if(questCnt === 6 && isCorrect == false) {
			Stout++;

			var newDiv = $('<div class="corAnsw">');
			
			setTimeout(function() {
				
				isCorrect = false;
				$('div').remove('.corAnsw');
				$('div').remove('.timeRem');
				$('div').remove('.timeIsUp');
				
			
				displayBeerStyle();

			}, 500);
		}

		else if(questCnt === 6 && isCorrect === true) {
			Ale++;

			var newDiv = $('<div class="corAnsw">');
			

			setTimeout(function() {
				isCorrect = false;

				$('div').remove('.corAnsw');
				$('div').remove('.timeRem');
				$('div').remove('.timeIsUp');

				
				displayBeerStyle();

			}, 500);
		}
		console.log('question counter = ' + questCnt);

	}


	function quest1() {

		questCnt++;

		$('.btnContainer').append('<div class="questionInput">' + questions.q1 + '</div>');

		$('.btnContainer').append('<button class="answerVal" data-value="0">' + answers.answers1[0][1] + '</button>');

		$('.btnContainer').append('<button class="answerVal" data-value="1">' + answers.answers1[0][2] + '</button>');

		$('.btnContainer').append('<button class="answerVal" data-value="1">' + answers.answers1[0][3] + '</button>');		
	}

	function quest2() {

		questCnt++;

		$('.btnContainer').append('<div class="questionInput">' + questions.q2 + '</div>');

		$('.btnContainer').append('<button class="answerVal" data-value="0">' + answers.answers2[0][1] + '</button>');

		$('.btnContainer').append('<button class="answerVal" data-value="1">' + answers.answers2[0][2] + '</button>');

		$('.btnContainer').append('<button class="answerVal" data-value="0">' + answers.answers2[0][3] + '</button>');		
	}

	function quest3() {

		questCnt++;

		$('.btnContainer').append('<div class="questionInput">' + questions.q3 + '</div>');

		$('.btnContainer').append('<button class="answerVal" data-value="0">' + answers.answers3[0][1] + '</button>');

		$('.btnContainer').append('<button class="answerVal" data-value="1">' + answers.answers3[0][2] + '</button>');

		$('.btnContainer').append('<button class="answerVal" data-value="1">' + answers.answers3[0][3] + '</button>');		
	}

	function quest4() {

		questCnt++;3

		$('.btnContainer').append('<div class="questionInput">' + questions.q4 + '</div>');

		$('.btnContainer').append('<button class="answerVal" data-value="1">' + answers.answers4[0][1] + '</button>');

		$('.btnContainer').append('<button class="answerVal" data-value="0">' + answers.answers4[0][2] + '</button>');

		$('.btnContainer').append('<button class="answerVal" data-value="0">' + answers.answers4[0][3] + '</button>');		
	}

	function quest5() {

		questCnt++;

		$('.btnContainer').append('<div class="questionInput">' + questions.q5 + '</div>');

		$('.btnContainer').append('<button class="answerVal" data-value="1">' + answers.answers5[0][1] + '</button>');

		$('.btnContainer').append('<button class="answerVal" data-value="0">' + answers.answers5[0][2] + '</button>');

		$('.btnContainer').append('<button class="answerVal" data-value="1">' + answers.answers5[0][3] + '</button>');		
	}
	
	function quest6() {

		questCnt++;

		$('.btnContainer').append('<div class="questionInput">' + questions.q6 + '</div>');

		$('.btnContainer').append('<button class="answerVal" data-value="1">' + answers.answers6[0][1] + '</button>');

		$('.btnContainer').append('<button class="answerVal" data-value="0">' + answers.answers6[0][2] + '</button>');

		$('.btnContainer').append('<button class="answerVal" data-value="1">' + answers.answers6[0][3] + '</button>');		
	}
	

	function chooseCheckAnswer() {
		$('button').on('click', function() {

			var chooseCheckAnswer = $(this).attr('data-value');

			console.log(chooseCheckAnswer)

			clearInterval(interval);

			if (chooseCheckAnswer == '1') {

				isCorrect = true;
			}

			else{
				
				isCorrect = false;

			}

				$('button').remove();

				$('.questionInput').remove();
				dispAns();
		});
	}


	function displayBeerStyle() {
		
			if(Ale > 2) {
				
				
				$('.showAle').fadeIn();
				$('.background').remove();
			}

			else{
				
				
				$('.showStout').fadeIn();
				$('.background').remove();

			}		
	}


    //$(".find").on("click", function() {
      //  $("#map").show();
        //$(".aleAndStout").hide();
    //});



	

	gamePlay();



/*
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

	$(document).ready(function() {
   
    $('.container').fadeIn(1000);
	});
	
*/	

	
		

	
	