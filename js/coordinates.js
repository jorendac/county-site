
// Storing Coordinates 

const myCounty = {
  name: "Burlington County",
  state: "New Jersey",
  minLon: -75.059913,
  maxLon: -74.389708,
  minLat: 39.541198,
  maxLat: 40.183651
};

console.log(myCounty);

const checkBtn = document.querySelector("#check-btn");
const resultDiv = document.querySelector("#result");

// Check Coordinates Function 

checkBtn.addEventListener("click", () => {
 // Read input values from the form (provided)

 const latInput = document.getElementById('lat-input').value;
 const lonInput = document.getElementById('lon-input').value;

 // STEP A: Convert strings to numbers using parseFloat()
 // Your code here:

const lat = parseFloat(latInput);
const lon = parseFloat(lonInput);

resultDiv.classList.remove("result-inside", "result-outside");

 // STEP B: Validate — check that both values are actual numbers
 // Hint: isNaN() returns true if the value is not a number
 // If either input is invalid, set a helpful message and return early
 // Your code here:

if (isNaN(lat) || isNaN(lon)) {
  resultDiv.textContent = "Please enter valid numbers for latitude and longitude.";  return;
}

 // STEP C: Check the boundaries using your myCounty object
 // Write an if/else that checks whether both coordinates fall
 // inside all four edges of your county. Use the && operator.
 // Declare a variable called result and assign your message inside each branch.
 // Your code here:
 
 let result;

  if (lat >= myCounty.minLat && lat <= myCounty.maxLat && lon >= myCounty.minLon && lon <= myCounty.maxLon) {
  result = "YES! Those coordinates are INSIDE " + myCounty.name + "!";

  const midLat = (myCounty.minLat + myCounty.maxLat) / 2;

  if (lat >= midLat) {
    result += " You're in the northern half of " + myCounty.name + ".";
  } else {
    result += " You're in the southern half of " + myCounty.name + ".";
  }

  resultDiv.classList.add("result-inside");
} else {
  result = "NO! Those coordinates are OUTSIDE " + myCounty.name + ".";
  resultDiv.classList.add("result-outside");
}
 
  resultDiv.textContent = result;

 if (marker) {
  map.removeLayer(marker); // remove old pin
}
marker = L.marker([lat, lon]).addTo(map);
map.setView([lat, lon], 10); // recenter map to the new pin

});

//map view
let map = L.map('map').setView([39.9, -75.3], 8); 
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri'
}).addTo(map);

//starting pin
let marker; 

