var input = document.querySelector("input");
var erreur = document.querySelector("p");
var formulaire = document.querySelector("form");

erreur.style.display = "none";

var nombreAleatoire = Math.floor(Math.random() * 1001);
var coup = 0;
var nombreChoisi;

// Résultat
function resultat(nb) {
    var resultat = document.createElement("div");

    if (nb < nombreAleatoire) {
        resultat.textContent = "#" + coup + " (" + nb + ") C'est plus !";
        resultat.className = "verdict plus";
    }
    else if (nb > nombreAleatoire) {
        resultat.textContent = "#" + coup + " (" + nb + ") C'est moins !";
        resultat.className = "verdict moins";
    }
    else {
        resultat.textContent = "#" + coup + " (" + nb + ") Félicitation ! Tu as trouvé le nombre mystère !";
        resultat.className = "verdict correct";
        input.disabled = true;
    }

    document.querySelector(".evolution").prepend(resultat);
}

// Afficher l'erreur
input.addEventListener("keyup", () => {
    if (isNaN(input.value)) {
        erreur.style.display = "block";
    }
    else {
        erreur.style.display = "none";
    }
});

// Vérifier que l'utilisateur rentre bien un nombre
formulaire.addEventListener("submit", (e) => {
    e.preventDefault();

    if (isNaN(input.value) || input.value == '') {
        input.style.borderColor = "red";
    }
    else {
        nombreChoisi = input.value;
        input.value = '';
        input.style.borderColor = "silver";
        coup++;
        resultat(nombreChoisi);
    }
});