$(document).ready(function(){
	$('.sketchPad').html("");

	//User sets the sketch pad width
	var gridWidth = prompt('How many columns/rows do you want your grid to be? (1-100)');

	//Create grid if user puts in reasonable size
	if (gridWidth >= 1 && gridWidth <= 100) {
		createGrid(gridWidth);
	} else {
		alert('You must pick a number between 1-100.')
	}

	//Create Grid Function

	function createGrid(gridSize) {
		for (var i = 1; i <= gridSize; i++) {
			console.log(i);
			$('.sketchPad').append('<div class="grid-square"></div>');
		};

		
	}





})


