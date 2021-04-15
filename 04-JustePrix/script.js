// Etape 1 - Création des variables
// Récupération des éléments depuis l'HTML
var formulaire = document.querySelector('#formulaire');
var input = document.querySelector('input');
var erreur = document.querySelector('p');

// Variables pour la suite
var nombreAleatoire = Math.floor(Math.random() * 1001);
var nombreChoisi;
var coup = 0;

// Etape 2 - Gestion de l'erreur
// D'abord, ne pas afficher l'erreur par défaut
erreur.style.display = 'none';

// Afficher l'erreur quand l'utilisateur entre autre chose qu'un nombre
input.addEventListener('keyup', () => {
  if(isNaN(input.value)){
    erreur.style.display = 'block';
  }
  else{
    erreur.style.display = 'none';
  }
});

// Etape 3 - Vérifier que l'utilisateur a bien envoyé un nombre
formulaire.addEventListener('submit', (e) => {
  e.preventDefault();

  if(isNaN(input.value) || input.value == ''){
    input.style.borderColor = "red";
  }
  else{
    nombreChoisi = input.value;
    input.value = '';
    coup++;
    input.style.borderColor = 'silver';
    traitement(nombreChoisi);
  }
});

// Etape 4 - Afficher la bonne information
function traitement(nb) {
  var info = document.createElement('div');

  if(nb < nombreAleatoire){
    info.textContent = '#' + coup + ' (' + nb + ') C\'est plus !';
    info.className = 'information plus';
  }
  else if(nb > nombreAleatoire){
    info.textContent = '#' + coup + ' (' + nb + ') C\'est moins !';
    info.className = 'information moins';
  }
  else{
    info.textContent = '#' + coup + ' (' + nb + ') Félicitation ! Tu as trouvé le nombre mystère !';
    info.className = 'information correct';
    input.disabled = true;
  }

  document.querySelector('.evolution').prepend(info);
}
