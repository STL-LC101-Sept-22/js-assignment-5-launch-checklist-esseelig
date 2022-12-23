// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
let div = document.getElementById("missionTarget");
   div.innerHTML = `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
            `;

}

// Finally, we need some JSON to fill in the crew on the mission destination. Our planetary data can be found in JSON format. Review the list and decide which planet you want to send our intrepid crew to and make note of the index number.
// When fetching more than one JSON object, we get an array of all of the JSON objects. In this case, that means an array of our possible mission destinations. When picking the mission destination, just pick the item in the array you want and start counting at 0.
// In scriptHelper.js, you have three functions for this task: myFetch(), pickPlanet(), and addDestinationInfo(). First, review the comments in addDestinationInfo(). This is the format of the innerHTML for the missionTarget div, which you can locate using the document parameter of addDestinationInfo(). addDestinationInfo() does not need to return anything. pickPlanet() takes in one argument: a list of planets. Using Math.random(), return one planet from the list with a randomly-selected index. myFetch() has some of the code necessary for fetching planetary JSON, however, it is not complete. You need to add the URL and return response.json().




function validateInput(testInput) {
    let numberTestInput = Number(testInput);
   if (testInput == "") {
    return "Empty";
   } else if(isNaN(numberTestInput)) {
    return "Not a Number";
   } else if(isNaN(numberTestInput) === false) {
    return "Is a Number";
   }
}


// input ids for the forms:
// pilotName
// pilot and co-pilot names should be strings

// copilotName
// pilot and co-pilot names should be strings

// fuelLevel
// fuel level and cargo mass should be numbers

// cargoMass
// fuel level and cargo mass should be numbers

//All fields need a valid value!



// also want to make sure that the user entered valid info for each of the fields
//Valid information for the fields means that the user submits a value that is easily converted to the correct data type for our fellow engineers

// pilot and co-pilot names should be strings
// fuel level and cargo mass should be numbers
// validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate.
// If you want to check if something is NaN, you cannot use == or ===. Instead, JavaScript has a built-in method called isNaN(value) that returns true if value is NaN and false if value is not NaN.
// so if statement that straight away
 



// In scriptHelper.js, you will use validateInput() to complete the formSubmission() function.
// formSubmission() will take in a document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass
// Using the values in those strings and the document parameter for your HTML document, update the shuttle requirements as described below
// Make sure to call your formSubmission() function at the appropriate time in your script.js file!



//add validation to notify the user if they forgot to enter a value for any one of the fields
//Add an alert to notify the user that all fields are required.

// If the user submits a fuel level that is too low (less than 10,000 liters), change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey. The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch" and the color should change to red.


//If the user submits a cargo mass that is too large (more than 10,000 kilograms), change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off. The text of launchStatus should also change to "Shuttle not ready for launch" and the color should change to red.

//If the shuttle is ready to launch, change the text of launchStatus to green and display "Shuttle is ready for launch".


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    // let formDocument = document.getElementById("update");

    let fuel = document.getElementById("fuelStatus");
    let cargo = document.getElementById("cargoStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");

    // validateInput(testInput);

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    
        alert("Please complete all fields");
        // alert("All fields need a valid value!");

    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
    
        alert("All fields need a valid value!");
        // alert("All fields need a valid value!");

    } else {

        // let listFaulty = document.getElementById("faultyItems");
        list.style.visibility = "visible";
        // document.faultyItems.visibility = "visible";

        // let form = document.querySelector("form");
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        let launchStatus = document.getElementById("launchStatus");
        //         <li id="pilotStatus" data-testid="pilotStatus">Pilot Ready</li>
        //         <li id="copilotStatus" data-testid="copilotStatus">Co-pilot Ready</li>

        //make faultyItems

        if (fuelLevel < 10000 && cargoLevel > 10000) {
            fuel.innerHTML = "Fuel level not high enough for launch";
            cargo.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";

            } else if (fuelLevel < 10000 && cargoLevel <= 10000) {

                fuel.innerHTML = "Fuel level not high enough for launch";
                cargo.innerHTML = "Cargo mass low enough for launch";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "rgb(199, 37, 78)";
        
        // document.faultyItems.visibility = "visible";
        // element.setAttribute("faultyItems", "style='visibility: visible'");
        // element.setAttribute("fuelStatus", "style='visibility: visible'");

        //         <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>

    } else if (fuelLevel >= 10000 && cargoLevel > 10000) {

        fuel.innerHTML = "Fuel level high enough for launch";
        cargo.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";


    } else {

        fuel.innerHTML = "Fuel level high enough for launch";
        cargo.innerHTML = "Cargo mass low enough for launch";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "rgb(65, 159, 106)";


        // fuelStatusItem.innerHTML = "Fuel level is acceptable for launch";
        // cargoStatusItem.innerHTML = "Cargo mass too high for launch";
        // launchStatus.innerHTML = "Shuttle not ready for launch";
        // launchStatus.style.color = "199, 37, 78"

        // document.faultyItems.visibility = "visible";
        // cargoStatusItem.innerHTML = "Cargo mass too high for launch";
        // launchStatus.innerHTML = "Shuttle not ready for launch";
        // launchStatus.style.color = "199, 37, 78"


    }


        // ul.innerHTML += "<li>Lemon</li>";
        // console.log(ul.innerHTML.trim());


        // document.getElementById("faultyItems")
        

        // <h2 id="launchStatus" data-testid="launchStatus">Awaiting Information Before Launch</h2>
        // <div  id="faultyItems" data-testid="faultyItems">
        //     <ol>
        //         <li id="pilotStatus" data-testid="pilotStatus">Pilot Ready</li>
        //         <li id="copilotStatus" data-testid="copilotStatus">Co-pilot Ready</li>
        //         <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
        //         <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>


        
    }



    // if validateInput(pilot) === "Empty"
    // if validateInput(pilot) === "Is a Number"

    // if validateInput(copilot) === "Empty"
    // if validateInput(copilot) === "Is a Number"

    // if validateInput(fuelLevel) === "Empty"
    // if validateInput(fuelLevel) === "Not a Number"

    // if validateInput(cargoLevel) === "Empty"
    // if validateInput(cargoLevel) === "Not a Number"


    // validateInput(pilot);
    // validateInput(copilot);

    // validateInput(fuelLevel);

    // validateInput(cargoLevel);

    // "Empty"
    // "Not a Number"
    // "Is a Number"
    
    //    if (typeof(pilotName) !== string || typeof(copilotName) !== string || typeof(Number(fuelLevel)) !== number || typeof(Number(cargoMass)) !== number || 

    // return "Empty", "Not a Number", or "Is a Number" as appropriate

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random()*planets.length);
    return planets[randomPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
