// ============================================
// PART 1: Selecting & Reading Elements
// ============================================


// count the number of paragraphs
const paragraphs = document.querySelectorAll('p');
console.log("Paragraphs:", paragraphs.length);

//log each paragraph
for (const p of paragraphs) {
  console.log(p.textContent);
}

const heading = document.querySelector("h1");
console.log("Heading:", heading.textContent);

heading.textContent = `${heading.textContent} — Pop: ${county.population}`;

const description = document.querySelector("#county-desc");
description.textContent = `${description.textContent} Founded in ${county.founded}.`;
console.log("Description:", description.textContent);

// ============================================
// PART 2: REST API + JSON
// ============================================
const params = new URLSearchParams({
 lat: 39.994, // your county seat latitude
 lon: -74.789, // your county seat longitude (negative = West)
 callsign: "WXVU", // your chosen station
 request_type: 4,
 search_freq: "none", pi_code: "none",
 sig_strength: "null", startMiles: "none",
 miles: "null", format: "none",
 rxHeight: 10, measurementUnit: "feet"
});

async function loadStation() {
 const url = `http://52.151.197.43/?${params}`;
 try {
 const response = await fetch(url);
 if (!response.ok) {
 throw new Error(`Response status: ${response.status}`);
 }
 const data = await response.json();
 const station = data.data[0];
 const result = document.querySelector("#station-result");
 const detail = document.querySelector("#station-detail");
 // YOUR CODE: set result.textContent to show callsign, frequency, city, and state
result.textContent = `Station: ${station.callsign}, Frequency: ${station.frequency}, City: ${station.city}, State: ${station.state}`;
 // YOUR CODE: set detail.textContent to show field_strength and distance
 // use .toFixed(1) on both numbers
detail.textContent = `Field Strength: ${station.field_strength.toFixed(1)}, Distance: ${station.distance.toFixed(1)} miles`;


 } catch (error) {
 console.error(error.message);
 }
}
loadStation();

// ============================================
// PART 4: Toggle & Events
// ============================================
const toggleBtn = document.querySelector("#toggle-btn");
const stationSection = document.querySelector("#station-section");
toggleBtn.addEventListener("click", () => {
 // YOUR CODE:
 // 1. Toggle the "hidden" class on stationSection
    stationSection.classList.toggle("hidden");
 // 2. If stationSection now has "hidden", set toggleBtn.textContent to "Show Station"
 //Otherwise set it to "Hide Station"
    if (stationSection.classList.contains("hidden")) {
      toggleBtn.textContent = "Show Station";
    } else {
      toggleBtn.textContent = "Hide Station";
    }
});


// ============================================
// PART 5: createElement
// ============================================
const waterBtn = document.querySelector("#water-btn");
const waterPhoto = document.querySelector("#water-photo");
let imageShown = false; // state variable — tracks what's on screen
let currentImg = null; // holds a reference to the img element
waterBtn.addEventListener("click", () => {
 if (!imageShown) {
 // YOUR CODE:
 // 1. Create an img element with createElement
 const img = document.createElement("img");
 // 2. Set its src to your water photo URL, its alt, and style.maxWidth = "500px"
 img.src = "https://upload.wikimedia.org/wikipedia/commons/3/34/Medford_Lakes%2C_NJ.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original";
 img.alt = "The Medford Lakes in Burlington County, New Jersey";
 img.style.maxWidth = "500px";
 // 3. Store it in currentImg, then append it to waterPhoto
    currentImg = img;
    waterPhoto.appendChild(currentImg);
 // 4. Update waterBtn.textContent to "Hide Photo"
    waterBtn.textContent = "Hide Photo";
 // 5. Set imageShown to true
    imageShown = true;
 } else {
 // YOUR CODE:
 // 1. Call .remove() on currentImg
    currentImg.remove();
 // 2. Reset currentImg to null
    currentImg = null;
 // 3. Update waterBtn.textContent to "Show Photo"
    waterBtn.textContent = "Show Photo";
 // 4. Set imageShown to false
    imageShown = false;
 }
});