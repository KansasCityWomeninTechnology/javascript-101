const addDevSkill = function (skill) {
	let listItem = document.createElement('li');
	listItem.innerHTML = skill;
	document.getElementById("coding-section").appendChild(listItem);
};



const request = function (item) {
	return 'I\'d like a ' + item + ', please!';
}
const drink = 'cocktail';


let numberOfClicks = 0;
const clickHandler = function (text) {
	numberOfClicks = numberOfClicks + 1;
	console.log(numberOfClicks);

	if (numberOfClicks <= 3) {
		alert(text);
	} else {
		alert("Drink in moderation-- no more cocktails for you!")
	}
};


// Declare brainSkills array below this line



document.addEventListener("DOMContentLoaded", function (event) {


	document.getElementById('cocktail-section').innerHTML = request(drink);

});
