

const county = {
 name: "Burlington ", // county name
 state: "New Jersey", // state
 population: 485356, // current population
 seat: "Mount Holly", // county seat
 founded: 1677, // year founded
 areaSqMi: 827, // area in square miles
 myTown: "Lumberton",     // your hometown

 largestMunicipality: {
  name: "Evesham Township", // fill in
  population: 49525  // fill in
 }

};

function classifyCounty(pop) {
 // your code here
 if (pop < 50001) {
  return "small";
 } else if (pop < 250001) {
  return "medium";
 } else {
  return "large";
 }
}

for (let i = 1; i <= 5; i++) {
 let message = "County #" + i;
 var lastCount = i;
 console.log(message);
}

userChoice = prompt(
 "What would you like to know about " + county.name + "?\n"
 + "1. Population\n"
 + "2. County Seat\n"
 + "3. Year Founded"
);
// Write your if / else if / else block below.
// Use alert() to display the answer.
// Use === for all comparisons
if (userChoice === "1") {
 alert("The population of " + county.name + " is " + county.population + ".");
} else if (userChoice === "2") {
 alert("The county seat of " + county.name + " is " + county.seat + ".");
} else if (userChoice === "3") {
 alert("" + county.name + " was founded in " + county.founded + ".");
} else {
 alert("Invalid choice. Please select 1, 2, or 3.");
}



