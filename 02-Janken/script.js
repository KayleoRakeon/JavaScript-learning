var img = document.querySelectorAll('img');
var choix = document.querySelector('.choix');
var modale = document.querySelector('.modale');
var txtModale = document.querySelector('.modale p');
var resultat;


// Afficher le choix au hover

function afficherChoix() {
    choix.textContent = this.id;
    switch (this.id) {
        case 'pierre':
            choix.style.color = '#971801';
            break;

        case 'feuille':
            choix.style.color = '#0F0E8F';
            break;

        case 'ciseau':
            choix.style.color = '#3A9018';
            break

        default:
            choix.style.color = "#252525";
    }
}

function cacherChoix() {
    choix.textContent = '';
}


// Le joueur a fait son choix 

var resultat = document.querySelector('resultat');

function ia(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}

function jeu() {
    switch (this.id) {
        case 'pierre':
            switch (ia(1, 3)) {
                case 1:
                    modale.style.display = "flex";
                    txtModale.textContent = "L'ia a choisi pierre... Égalité !";
                    break;

                case 2:
                    modale.style.display = "flex";
                    txtModale.textContent = "L'ia a choisi feuille... Vous avez perdu...";
                    break;

                case 3:
                    modale.style.display = "flex";
                    txtModale.textContent = "L'ia a choisi ciseau... Vous avez gagné !";
                    break;

                default:
                    resultat = false;
            }
            break;

        case 'feuille':
            switch (ia(1, 3)) {
                case 1:
                    modale.style.display = "flex";
                    txtModale.textContent = "L'ia a choisi pierre... Vous avez gagné !";
                    break;

                case 2:
                    modale.style.display = "flex";
                    txtModale.textContent = "L'ia a choisi feuille... Égalité !";
                    break;

                case 3:
                    modale.style.display = "flex";
                    txtModale.textContent = "L'ia a choisi ciseau... Vous avez perdu...";
                    break;

                default:
                    resultat = false;
            }
            break;

        case 'ciseau':
            switch (ia(1, 3)) {
                case 1:
                    modale.style.display = "flex";
                    txtModale.textContent = "L'ia a choisi pierre... Vous avez perdu...";
                    break;

                case 2:
                    modale.style.display = "flex";
                    txtModale.textContent = "L'ia a choisi feuille... Vous avez gagné !";
                    break;

                case 3:
                    modale.style.display = "flex";
                    txtModale.textContent = "L'ia a choisi ciseau... Égalité !";
                    break;

                default:
                    resultat = false;
            }
            break;

        default:
            resultat = false;
    }
}


for (var i = 0; i < img.length; i++) {
    img[i].addEventListener("mouseover", afficherChoix);
    img[i].addEventListener("mouseleave", cacherChoix);

    // Le joueur a fait son choix
    img[i].addEventListener("click", jeu);
}


// Rafraichir la page 

var rejouer = document.querySelector('.modale button');
function refresh() {
    window.location.reload();
}
rejouer.addEventListener("click", refresh);