$(document).ready(function(){
	$(sketchPad).html("");

	//User sets the sketch pad width
	var gridWidth = prompt('How many columns/rows do you want your grid to be?');

	//Don't want the grid to be too large
	if (gridWidth >= 1 && gridWidth <= 100) {

		

	};

	$('.gridSquare').mouseenter(function(){
			switch(option){
				case 1:
					$(this).addClass('gridSquareLit');
					break;
				case 2:
					var currentOpacity = $(this).css('opacity');
					if(currentOpacity > 0){
						$(this).css('opacity', currentOpacity - 0.1);
					}
					break;
				case 3:
					/*
						Animate to 0% opacity over 200ms, then back to 100%
						opacity over 800ms when cursor leaves square.
						This "case 3" was added for fun. The Odin Project
						does not ask you to do this option.
					*/
					$(this).fadeTo(100,0);
					$(this).mouseleave(function(){
						$(this).fadeTo(400,1);
					});
					break;
			}
		});




})


