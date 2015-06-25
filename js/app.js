$(document).ready(function(){

	$('.sketchPad').html("");
	getUserSize();
	var gridWidth;

	//User sets the sketch pad width
	function getUserSize() {
		 gridWidth = prompt('How many columns/rows do you want your grid to be? (1-100) Leave blank and click OK for default size.');

		//Create grid if user puts in reasonable size
		if (gridWidth >= 1 && gridWidth <= 100) {
			createGrid(gridWidth);
		} else if (gridWidth === "") {
			createGrid(50);
		} else {
			alert('You must pick a number between 1-100.');
			getUserSize();
		}
	}

	//Default Button
	$(".normal").click(function(){
		$('.sketchPad').html("");
		getUserSize();
	});

	//Rainbow Button
	$('.random').click(function(){
		$('.sketchPad').html("");
		getUserSize();

		$('.grid-square').hover(function(){
			$(this).css('background-color', getRandomColor());
		});

	});

	//Darken Button
	$('.opacity').click(function(){
		$('.sketchPad').html("");
		getUserSize();

		var currentOpacity = $('.grid-square').css('opacity');

		$(".grid-square").hover(function() {
			$(this).css('background-color','');
			if(currentOpacity > 0){
    			$(this).css('opacity', currentOpacity - 0.1);
    		}
  		});

	});

	//Trail Button

	//Clear Button
	$(".clear").click(function(){
		$(".grid-square").css('background-color', '#E0E0E0');
	});


	//Create Default Grid Function

	function createGrid(gridSize) {
		for (var i = 1; i <= gridSize * gridSize; i++) {
			$('.sketchPad').append('<div class="grid-square"></div>');
		};

		var width = ($(".sketchPad").width())/ gridSize;  
		$(".grid-square").css({"width":width ,"height":width});

		$(".grid-square").hover(function() {
    		$(this).css('background-color','#000');
  		});
	}

	//Random Color Generator Function
	function getRandomColor() {
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    return color;
	}








})


