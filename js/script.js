// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

//Stocker l'heure , minute , seconde  dans des varaiables


function demarrerLaMontre(){
    let time  = new Date();
    resetTransition(AIGUILLESEC, time.getSeconds());
    resetTransition(AIGUILLEMIN, time.getMinutes());
    resetTransition(AIGUILLEHR, time.getHours());
	AIGUILLEMIN.style.transform = "rotateZ(" + time.getMinutes() * 6 + "deg)";
	AIGUILLESEC.style.transform = "rotateZ(" + time.getSeconds() * 6  + "deg)";
	AIGUILLEHR.style.transform =
		"rotateZ(" +(time.getHours() * 30 + time.getMinutes() / 2) + "deg)";
}

function resetTransition(elem, time) {
    time === 0  ? elem.style.transition = "none" :
    elem.style.transition = "transform .5s ease-in-out"
}


demarrerLaMontre();
setInterval(demarrerLaMontre, 1000);


