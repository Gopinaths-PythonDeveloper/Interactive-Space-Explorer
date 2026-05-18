// GET ELEMENTS

const planetName =
document.getElementById("planet-name");

const planetInfo =
document.getElementById("planet-info");

// VARIABLES

let typingInterval;
let resetTimer;

/* TYPEWRITER EFFECT */

function typeWriter(text){

    clearInterval(typingInterval);

    planetInfo.innerHTML = "";

    let index = 0;

    typingInterval = setInterval(() => {

        planetInfo.innerHTML +=
        text.charAt(index);

        index++;

        if(index >= text.length){

            clearInterval(typingInterval);
        }

    }, 40);
}

/* SHOW PLANET */

function showPlanet(name, info){

    clearTimeout(resetTimer);

    clearInterval(typingInterval);

    planetName.innerHTML = name;

    typeWriter(info);

    resetTimer = setTimeout(() => {

        planetName.innerHTML =
        "SOLAR SYSTEM";

        planetInfo.innerHTML =
        "Click any planet to see details.";

    }, 15000);
}