//Rebecca Schwilm
//October 6, 2014
//Expressions Worksheet


//Dog Years

//Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”  
//Calculate how old Sparky the pit bull is in dog years based on his actual age.
//To find how old Sparky is in dog years, you multiply his current age by 7

var sparky = 5;
var dogYears = sparky * 7;
console.log("Sparky is " + sparky + " human years old, which is " + dogYears + " in dog years.");


//Slice of Pie pt1

//A bunch of students are having a party and somebody ordered pizza.
//Create an expression that calculates how much pizza each partygoer will get at the party.
//(Assume all pizzas have the same number of slices and that the person dividing the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.)
//You will multiply how many pizzas were ordered, by how many slices there are per pizza.
//After finding how many slices total, you will divide by total amout of people.

var slices = 12;
var partyGoers = 13;
var pizzasOrdered = 10;
var slicesPerPerson = slices * pizzasOrdered / partyGoers;
console.log("Each person ate " + slicesPerPerson + " slices at the party.");


//Slice of Pie pt2

//At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests.
//Assume guests get whole slices, how many whole slices will Sparky feast on?
//You need to find out how many leftovers there will be using modulo. 

var leftOvers = (slices * pizzasOrdered) % partyGoers;
var slicesPerPerson = (slices * pizzasOrdered - leftOvers) / partyGoers;
console.log("Sparky got " + leftOvers + " slices of pizza.");


//Average Shopping Bill

//You are budgeting your money for the year and must calculate your average weekly grocery shopping spending over the past five weeks. 
//Store the past five grocery totals as a list in an array. 
//Create an expression that will use the items in the array to calculate the average amount spent on groceries.
//You first add all 5 weeks of shopping to find the total, then divide by how many weeks you went shopping (5 weeks).

var shoppingArray = new Array (70, 103, 84, 99, 150);
var totalSpent = shoppingArray[0] + shoppingArray[1] + shoppingArray[2] + shoppingArray[3] + shoppingArray[4];
var averageSpent = totalSpent/5;
console.log("You have spent a total of $" + totalSpent+ " on groceries over 5 weeks. That is an average of $" + averageSpent + " per week");


//Discounts
//Calculate the discounted price for an item. Create an expression that will calculate the discounted price with and without sales tax.

var origPrice = 15.70;
var discPercentage = 30;
var desc = "Necklace";
var salesTaxPercentage = 7;
var itemWOutTax = origPrice - origPrice*(discPercentage/100);
var itemWTax = itemWOutTax*(salesTaxPercentage/100);
console.log("Your " + desc + " was originally $" + origPrice + ", but after a " + discPercentage + "% discount, it is now $" + itemWOutTax + " without tax, and $" 
+ itemWTax + " with tax.");
