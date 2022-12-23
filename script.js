// Write your JavaScript code here!

// const { myFetch, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planetChosen = pickPlanet(listedPlanets);
        addDestinationInfo(document, planetChosen.name, planetChosen.diameter, planetChosen.star, planetChosen.distance, planetChosen.moons, planetChosen.image);

   });


//    addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//     // Here is the HTML formatting for our mission target div.
//  let div = document.getElementById("missionTarget");
//     div.innerHTML = `<h2>Mission Destination</h2>
//                  <ol>
//                      <li>Name: ${name}</li>
//                      <li>Diameter: ${diameter}</li>
//                      <li>Star: ${star}</li>
//                      <li>Distance from Earth: ${distance}</li>
//                      <li>Number of Moons: ${moons}</li>
//                  </ol>
//                  <img src="${imageUrl}">

   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden";

   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
       event.preventDefault();

   let pilotInput = document.querySelector("input[name=pilotName]");
   let pilot = pilotInput.value; 

   let copilotInput = document.querySelector("input[name=copilotName]");
   let copilot = copilotInput.value;

   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let fuelLevel = Number(fuelLevelInput.value);

   let cargoLevelInput = document.querySelector("input[name=cargoMass]");
   let cargoLevel = Number(cargoLevelInput.value);

   formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
});

   // input ids for the forms:
// 
// pilot and co-pilot names should be strings

// isNaN(value) == true

// copilotName
// pilot and co-pilot names should be strings


// fuelLevel
// fuel level and cargo mass should be numbers

// cargoMass
// fuel level and cargo mass should be numbers


   //First, do as the comments in the code tell you and set listedPlanetsResponse equal to the value returned when calling myFetch(). This value is going to be a promise. If we head to our browser and open up our developer tools, we can now see a list of the planets. Then using pickPlanet() and addDestinationInfo(), select a planet at random from listedPlanets and pass that information to addDestinationInfo(). Reload your page and check out your site to see the mission target information.
   //myFetch() will be calling https://handlers.education.launchcode.org/static/planets.json

   
});




//     let form = document.querySelector("form");
//     form.addEventListener("submit", function(event) {
//        let usernameInput = document.querySelector("input[name=username]");
//        let teamName = document.querySelector("input[name=team]");
//        if (usernameInput.value === "" || teamName.value === "") {
//           alert("All fields are required!");
//           // stop the form submission
//           event.preventDefault();
//        }
//     });
//  });

// need to add event listener for the form and preventDefault from the jump
//Use preventDefault() to prevent a request from being sent out and the page reloading.


// Make sure to call your formSubmission() function at the appropriate time in your script.js file!


//The list of shuttle requirements, the div with the id faultyItems, should be updated if something is not ready for launch. Using template literals, update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.


