console.log('Loading global variables.');

var strings = [];

console.log('Global variables successfully loaded.');
console.log('Loading global functions.');

function enterString() {
	var string1 = prompt('Please enter some text.');

	if (string1 === null) {
		alert('Function terminated.');
	} else if (string1 === '') {
		alert('You must enter something.');
		enterString();
	} else {
		strings.push(string1);
		alert(strings);
	}
}

function displayString() {
	var txt = strings[0];

	console.log(txt);
	var text = document.getElementById('text');
	text.textContent = txt;
}

console.log('Global functions successfully loaded.')
console.log('Initiating startup functions.')

enterString();
displayString();

console.log('Startup functions successfully completed.')
