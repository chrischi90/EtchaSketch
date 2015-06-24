$(document).ready(function(){

	$('.sketchPad').html("");
	getUserSize();
	var gridWidth;

	//User sets the sketch pad width
	function getUserSize() {
		 gridWidth = prompt('How many columns/rows do you want your grid to be? (1-100)');

		//Create grid if user puts in reasonable size
		if (gridWidth >= 1 && gridWidth <= 100) {
			createGrid(gridWidth);
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

	//Lighten Button

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








})
