// some game
// v.0.7.0723
// 

/*
BIG LIST OF ENEMIES AND STARTING VALUES

ID 	Name 		HitP	Atk	Def 	
0	Banana 		30		3	2
1	Apple 		40		5	1
2	Orange 		40		4	1
3	Grape		20		6	0
4	Pineapple	50		7	3
5	Strawberry	30		4	0
*/

// set up flavor text for fruit combat
function flavorBanana() {
	// flavor texts
	flavors = ["Bananas are radioactive.","Bananas are clones.","Most types of banana are unpalatable.","Bananas are technically a berry.","A cluster of bananas is called a \"hand.\""];
	// pick a flavor text and return it
	flavor = Math.floor(Math.random() * flavors.length);
	return flavors[flavor];
};

function flavorApple() {
	// flavor texts
	flavors = ["Only the crabapple is native to North America.","Apple trees take 4-5 years to produce first fruit.","Apples are a member of the rose family.","It takes about 36 apples to make one gallon of cider."];
	// pick a flavor text and return it
	flavor = Math.floor(Math.random() * flavors.length);
	return flavors[flavor];
};

function flavorOrange() {
	// flavor texts
	flavors = ["Orange trees are evergreens.","An orange tree can live for over a hundred years.","Valencia orange peels remain green after ripening.","Oranges are highly acidic."];
	// pick a flavor text and return it
	flavor = Math.floor(Math.random() * flavors.length);
	return flavors[flavor];
};

function flavorGrape() {
	// flavor texts
	flavors = ["There are 8,000 grape varieties worldwide.","Raisins contain only 15\% water.","Grapes are a laxative if you eat enough.","Some grapes have been sold for up to \$315 per berry."];
	// pick a flavor text and return it
	flavor = Math.floor(Math.random() * flavors.length);
	return flavors[flavor];
};

function flavorPineapple() {
	// flavor texts
	flavors = ["It takes almost three years for a single pineapple to reach maturation.","Pineapples were so named because they resembled pine cones.","Pineapple cores contain high levels of bromelain.","A pineapple is the result of many flowers whose fruitlets have joined together around a core."];
	// pick a flavor text and return it
	flavor = Math.floor(Math.random() * flavors.length);
	return flavors[flavor];
};

function flavorStrawberry() {
	// flavor texts
	flavors = ["Strawberries are the only fruit with seeds on the outside.","Belgium has a museum dedicated to strawberries.","Strawberries contain high levels of nitrate.","The ancient Romans thought strawberries had medicinal properties."];
	// pick a flavor text and return it
	flavor = Math.floor(Math.random() * flavors.length);
	return flavors[flavor];
};

// set up enemy starting vars
var enemyName = ["Banana", "Apple", "Orange", "Grape", "Pineapple", "Strawberry"];
var enemyHitPoints = [30, 40, 40, 20, 50, 30];
var enemyAttack = [3, 5, 4, 6, 7, 4];
var enemyDefense = [0, 0, 0, 0, 0, 0];
var enemyFlavorText = [flavorBanana(), flavorApple(), flavorOrange(), flavorGrape(), flavorPineapple(), flavorStrawberry()];

// set starting player vars
var playerName = "coffee";
var playerHitPoints = 40;
var playerAttack = 5;
var playerDefense = 0;

function showEnemyName(currentEnemyID) {
	// show enemy name in elementID 'playertarget'
	// pull from var enemyName using currentEnemyID
	return enemyName[currentEnemyID];
};

function aAn(vari, id) {
	// if the first letter of the id of the var is vowel, use an
	// else use a
	var word = vari[id];
	//console.log(word);
	var firstLetter = word[0];
	//console.log(firstLetter);

	switch (firstLetter) {
		case "A":
		case "a":
		case "E":
		case "e":
		case "I":
		case "i":
		case "O":
		case "o":
		case "U":
		case "u":
			return "an";
		default:
			return "a";
	};
};

function combatInit() {		// initialize combat with default values
	// set combat window in #sectionMiddle
	console.log('Function combatInit just ran holy shit')
	document.getElementById('currentScreen').innerHTML =  '<div id="action"></div><div id="playerTarget"></div><div id="combatFlavorText"></div>';

	// roll to see which enemy appears, equal chances
	var currentEnemyID = Math.floor(Math.random() * enemyName.length);
	// display information about enemy in main window
	document.getElementById('action').innerHTML = '<span>you are fighting ' + aAn(enemyName, currentEnemyID) + '</span>';
	document.getElementById('playerTarget').innerHTML = showEnemyName(currentEnemyID) + ".";
	console.log('INSIDE COMBATINIT')
	document.getElementById('combatFlavorText').innerHTML = '<span>' + enemyFlavorText[currentEnemyID] + '</span>';
	document.getElementById('leftNavButtons').innerHTML = '' 
		+ '<button class="thebutton" id="attack">attack.</button><br/>'
		+ '<button class="thebutton" id="defend">defend.</button><br/>'
		+ '<button class="thebutton" id="abscond">abscond.</button><br/>'
		+ '<button class="thebutton" id="reinit">re-init.</button>';
	
	// trying silvio's idea to put this line inside the combatInit functio'n[0]
	// looks like it worked <=[
	document.getElementById("reinit").onclick = combatInit;
};

// the only thing done in this right now
combatInit();

// get clicks and reinit if reinit

