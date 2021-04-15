var ajouter = document.querySelector('#ajouter');
var tacheModele = document.querySelector('.tache');
var newTache;

var modale = document.querySelector('.modale');
var formulaire = document.querySelector('.modale form');
var newTitre = document.querySelector('#newTitre');
var newDesc = document.querySelector('#newDesc');
var erreur = document.querySelector('#erreur');

var allTache, suppr, select;

ajouter.addEventListener('click', () => {
    modale.style.display = 'flex';
});

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if (newTitre.value == '') {
        newTitre.style.borderColor = "red";
        erreur.style.display = "block";
    }
    else {
        newTache = tacheModele.cloneNode(true);

        var titre = newTache.querySelector('#titre');
        titre.textContent = newTitre.value;
        if (newDesc != '') {
            var desc = newTache.querySelector('#desc');
            desc.textContent = newDesc.value;
        }

        newTache.value = '';
        newDesc.value = '';
        modale.style.display = 'none';

        newTache.style.display = 'block';
        document.querySelector('.aFaire').append(newTache);

        allTache = document.querySelectorAll('.tache');
        for (i = 0; i < allTache.length; i++) {
            select = allTache[i].querySelector('#statut');
            select.addEventListener('change', changerStatut);

            suppr = allTache[i].querySelector('#supprimer');
            suppr.addEventListener('click', supprimerTache);
        }
    }
});

function changerStatut() {
    var newStatut = this.value;
    var thisTache = this.parentElement.parentElement;
    thisTache.remove();
    document.querySelector('.' + newStatut).append(thisTache);
}

function supprimerTache() {
    var thisTache = this.parentElement.parentElement;
    thisTache.remove();
}

