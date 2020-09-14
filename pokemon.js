$(document).ready(function() {
	var numofimg = 151;
	for (var i = 1; i <= numofimg; i++) {
		$('#wrapper').append(
			`<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${i}.gif'>`
		);
	}
});
