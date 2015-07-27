console.log('Loading global variables.');

var age = 0;
var rounds = 0;
var tab = [];

console.log('Global variables successfully loaded.');
console.log('Loading global functions.');

function checkAge() {
	age = prompt('How old are you? Note: you must be over the age of 21 to purchase drinks here.');
	age = parseInt(age);

	if (age === null) {
		alert('Function terminated.')
	} else if (isNaN(age)) {
		alert('You must enter a valid number.');
		checkAge();
	} else if (age < 21) {
		alert('You are too young to purchase drinks here.');
	} else {
		function askRounds() {
			rounds = prompt('How many rounds would you like to purchase?', 2);
			rounds = parseInt(rounds);

			if (rounds === null) {
				alert('Function terminated.')
			} else if (isNaN(rounds)) {
				alert('You must enter a valid number.');
				askRounds();
			} else if (rounds > 10) {
				alert('You cannot order more than 10 drinks per visit.');
				askRounds();
			} else {
				for (var i = 0; i < rounds; i++) {
					var drink = prompt('What drink would you like?');
					tab.push(drink);
					alert('One ' + drink + ' coming up.');
				}
				for (var j = 0; j < tab.length; j++) {
					var drinkText = document.createElement("p");
					var txt = document.createTextNode(tab[j]);
					drinkText.appendChild(txt);
					document.body.appendChild(drinkText);
				}
			}
		}

		askRounds();
	}
}

var blinkOn = true;
var blinkTrue = true;

function blink() {
	if (blinkOn === true && blinkTrue === true) {
		blinkOn = false;
		var titleBlink = document.getElementById('mainTitle');
		titleBlink.setAttribute('class', 'hidden')
	} else if (blinkOn === false && blinkTrue === true) {
		blinkOn = true;
		var titleBlink = document.getElementById('mainTitle');
		titleBlink.removeAttribute('class', 'hidden')
	}

	setTimeout(blink, 500);
}

console.log('Global functions successfully loaded.')
console.log('Initiating startup functions.')

var button = document.getElementById('button');
button.addEventListener('click', checkAge);

var genreInputs = document.getElementsByName("genre");
console.log(genreInputs);
var genre;
for (var i = 0; i < genreInputs.length; i++) {
	var genreInput = genreInputs[i];
	if (genreInput.checked) {
		genre = genreInput.value;
	}
}
console.log(genre);
	


console.log('Startup functions successfully completed.')