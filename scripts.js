const addDevSkill = function (skill) {
	let listItem = document.createElement('li');
	listItem.innerHTML = skill;
	document.getElementById("coding-section").appendChild(listItem);
};

const addLadyDev = function (ladyDev) {
	let listItem = document.createElement('li');
	listItem.innerHTML = ladyDev;
	document.getElementById("fellow-ladydevs").appendChild(listItem);
};

const request = function (item) {
	return 'I\'d like a ' + item + ', please!';
};
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
const brainSkills = [
	"Front-End Architecture",
	"HTML",
	"CSS",
	"Command line operations",
	"Vim",
	"Git",
	"JavaScript Types"
];

const ladyDevs = [
	"Grace Hopper",
	"Evelyn Boyd Granville",
	"Ada Lovelace",
	"Barbara Liskov",
	"Margaret Hamilton",
	"Sister Mary Kenneth Keller"
];

document.addEventListener("DOMContentLoaded", function (event) {


	document.getElementById('cocktail-section').innerHTML = request(drink);

	brainSkills.forEach(function (element) {
		addDevSkill(element);
	});

	ladyDevs.forEach(function (element) {
		addLadyDev(element);
	});
});
