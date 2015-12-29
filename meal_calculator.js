var Diner = function( meals ) {
	if (meals === undefined) {
		this.meals = [];
	} else {
		this.meals = meals;
	}
}

Diner.prototype.addMeal = function(meal) {
	this.meals.push( meal );
}
Diner.prototype.addTotal = function() {
	var total = 0;
	
	for (meal in this.meals) {
		total += this.meals[meal].cost;
	}
	return Number(total.toFixed(2));
}

Diner.prototype.calculateTax = function( taxRate ) {
	return Number((this.addTotal() * taxRate).toFixed(2));
}

var Meal = function( name, cost) {
	this.dish = name;
	this.cost = cost;
}
var drinks = [new Meal("Chocolate Beverage", 1.99), new Meal("Hot Chocolate", 2.99), new Meal( "Peppermint Hot Chocolate", 5.99), new Meal( "Salted Caramel Hot Chocolate",  4.99), new Meal("White Hot Chocolate", 4.99), new Meal( "Espresso Beverage",  1.99), new Meal( "Caffe Americano",  2.99), new Meal("Caffe Latte",  2.99), new Meal("Caffe Mocha", 4.49), new Meal( "Cappuccino", 2.99), new Meal("Pumpkin Spice Latte", 2.99)];
var dinners = [new Meal("New York Strip", 16.99), new Meal("Jumbo Steamed Shrimp", 16.99), new Meal("BBQ Dinner", 9.99),new Meal("Angel Hair Pasta", 12.99),new Meal("Chocolate Beverage", 1.99),new Meal("Gnocchi", 12.99),new Meal("Bakd Ziti with Italian Saugage", 15.99)];


var getRandomDrink = function() {
	return drinks[parseInt(Math.random() * drinks.length)];
}
var getRandomDinner = function() {
	return dinners[parseInt(Math.random() * dinners.length)];
}

var diners = [];
for (var i = 0; i <= Math.random() * 15 + 1; i++) {
	diners.push(new Diner([getRandomDrink(), getRandomDinner()]))
}

var totalBill = 0;
for (diner in diners) {
	var dinerTotal = diners[diner].addTotal();
	totalBill += dinerTotal;
	console.log("Diner " + diner + " has a total bill of $" + dinerTotal + ". \nThey ordered: ");
	for (meal in diners[diner].meals) {
		console.log(diners[diner].meals[meal].dish+"\t\t$"+diners[diner].meals[meal].cost);
	}
}

var tip = (totalBill * .25);
var individualTip = tip / diners.length;
console.log("The total bill is: $" + totalBill.toFixed(2));
console.log("A 25% tip would be: $" + tip.toFixed(2));
console.log("Each diner adds $" +  individualTip.toFixed(2) + " to their bill");
