//A code that could help determine how much electricity costs to run specific appliances

//init readline module
const input = require('readline-sync');

//variables
let wartAmps = Number(input.question('\nMost peole dont realize how much money it could be costing them yearly on power consumption by "wall warts". lets try this out; grab a simple USB phone charger and examine the power input requirements, then type just the numbers, including the decmial places, for Amps or (A) here...\n\n>'));

let wartWatts = wartAmps * 115;//Amps * voltage, typically 115 volts AC in the U.S. 

//let kwHCost = .0969; // the cost per Kilowatt hour for residential properties in st louis is 9.69 cents

let lightUseYear = 4 * 365; //to refer to avrage hours appliance is running/plugged in per day

let mediumUseYear = 8 * 365; // 8 hours per day in a year

let heavyUseYear = 12 * 365; // 16 hours per day in a year

let constantUseYear = 24 * 365; // on all the time

let yearlyConsumptionLight = wartWatts * lightUseYear / 1000;//here im figring the actual Kwh total for the users wall wart in a light use scenario (aprox. 4-6 hr/day). taking the ammount of power drawn by the device is plugged in and multiplying that by 4 hours * days in a year, and dividing in 1000 to = Killowatts/hour/year.

let yearlyConsumptionMedium = wartWatts * mediumUseYear / 1000;

let yearlyConsumptionHeavy = wartWatts * heavyUseYear / 1000;

let yearlyConsumptionConstant = wartWatts * constantUseYear / 1000;

console.log("\n\nBased on my math the ammount of kwh drawn by your wall warts breaks down like this:\n\nLight use, plugged in 4 hours a day for a year:\n" + yearlyConsumptionLight + "Kwh/year\n\nMedium use, plugged in 8 hours a day for a year:\n\n" + yearlyConsumptionMedium + "Kwh/year\n\nHeavy use, plugged in 4 hours a day for a year:\n\n" + yearlyConsumptionHeavy + "Kwh/year\n\nIf you never unplug your wall warts in the course of a year \n(constant use) your yearly power consumption is:\n\n" + yearlyConsumptionConstant + "Kwh/year\n\nLets get into what it could be costing you...")

//I originally planned on using my personal power cost per kwh here but it would be more fun to ask fo theirs to make it a batter tool for anyone to use but ill have to convert an value to accomidate for power being billed in fractional cents (atleast in my case)

let centsKwh = Number(input.question("\nHere you can enter your local cost per Kwh to figure out houw much you may be spending for these wall wart moochers. In my city, S.t Louis, the cost per Kwh of power is 9.69 cents.\n\n  You can go to:\n\nhttps://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_6_a\n\nto look up avrage cost in your state, or you can use 12.35, the curent avrage in the U.S.\n\n Local cost per kwh in cents(xx.xx)\n\n>"));

let localCostKwh = centsKwh * 0.01;

//console.log(localCostKwh);

console.log("Based on your local energy costs heres the brekdown of how much money your spending yearly keeping those wall warts plugged in:\n\n(light use): $" + localCostKwh * yearlyConsumptionLight + "/year\n\n(medium use): $" + yearlyConsumptionMedium * localCostKwh + "/year\n\n(heavy use): $" + yearlyConsumptionHeavy * localCostKwh + "/year\n\n(Constant Use): $" + yearlyConsumptionConstant * localCostKwh + "/year\n");

console.log("\nThat may not seem like much, but how many of these do we have plugged in around our houses? lets say maybe 10? more? lets plug in some more numbers:\n\nYearly constant consumption for 10 devices:\n\n" + yearlyConsumptionConstant * localCostKwh * 10 + "kwh/year\n\nYearly constant costs for 10 devices:\n\n $" + yearlyConsumptionConstant * localCostKwh + "/year");

console.log("\n\nHow about chargers left plugged in at the highest rate for power of any state\n in the U.S. according to eia.gov; Hawaii, with a whopping avrage 34.30 cents/kwh!\n\nOne device (constant use): $" + yearlyConsumptionConstant * .343 + "/year\n\n10 devices (constant use): $" + yearlyConsumptionConstant * .3430 * 10 + "/year\n\n");

let numBulbs = Number (input.question("Now lets think about light bulbs. How many lights do you leave on in your house all the time? It can be easy to forget to turn off the lights when leaving the room, and most fixtures have multiple bulbs lets get an estimate on how many bulbs you have and crunch the data..\n\nNumber of bulbs:\n>"));

let bulbs = numBulbs * 15;

let bulbConsumptionLight = bulbs * lightUseYear / 1000;

let bulbConsumptionMedium = bulbs * mediumUseYear / 1000;

let bulbConsumptionConstant = bulbs * constantUseYear / 1000;

console.log("If those bulbs are the newfangled LED, they each draw about 15 watts of power while on...\n\nLight use (4 Hours): " + bulbConsumptionLight + "kwh/year\n\n$" + bulbConsumptionLight * localCostKwh + "/year\n\nMedium use (8 hours): " + bulbConsumptionMedium + "kwh/year\n\n$" + bulbConsumptionMedium * localCostKwh + "/year\n\nConstant Use: " + bulbConsumptionConstant + "/year\n\n$" + bulbConsumptionConstant * localCostKwh + "/year");

bulbs = numBulbs * 60;

bulbConsumptionLight = bulbs * lightUseYear / 1000;

bulbConsumptionMedium = bulbs * mediumUseYear / 1000;

bulbConsumptionConstant = bulbs * constantUseYear / 1000;
 
console.log("\n\nHowever if they happen to be incandesscent they draw between 40 and 60 watts:\n\nLight use (4 Hours): " + bulbConsumptionLight + "kwh/year\n\n$" + bulbConsumptionLight * localCostKwh + "/year\n\nMedium use (8 hours): " + bulbConsumptionMedium + "kwh/year\n\n$" + bulbConsumptionMedium * localCostKwh + "/year\n\nConstant Use: " + bulbConsumptionConstant + "/year\n\n$" + bulbConsumptionConstant * localCostKwh + "/year");

let cont = "";

do {
  let adtlAppliances = Number( input.question("\n\nLook around your home and see waht some of the consumption rates and costs are to running other appliances year round, just punch in the Amps consumed on the lable.\n\n>"));

  adtlAppliances = adtlAppliances * 120

  yearlyConsumptionLight = adtlAppliances * lightUseYear / 1000;

  yearlyConsumptionMedium = adtlAppliances * mediumUseYear / 1000;

  yearlyConsumptionConstant = adtlAppliances * constantUseYear / 1000

  console.log("\n\nLight use (4 Hours): " + yearlyConsumptionLight + "kwh/year\n\n$" + yearlyConsumptionLight * localCostKwh + "/year\n\nMedium use (8 hours): " + yearlyConsumptionMedium + "kwh/year\n\n$" + yearlyConsumptionMedium * localCostKwh + "/year\n\nConstant Use: " + yearlyConsumptionConstant + "/year\n\n$" + yearlyConsumptionConstant * localCostKwh + "/year" );

  cont = input.question("\n\nContinue? (y/n):\n>");

}while (cont === "y");

console.log("\n\nI hope using this program has cast a little light on how much you could be saving in both power and money!\n\nEnd. ")