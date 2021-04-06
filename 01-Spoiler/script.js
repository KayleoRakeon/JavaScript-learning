var boutonSpoiler = document.querySelectorAll('span');

for (var i = 0; i < boutonSpoiler.length; i++) {
    boutonSpoiler[i].addEventListener('click', showSpoil);
}

function showSpoil() {
    this.textContent = "Coucou toi !";
    this.style.border = "none";
    this.style.background = "none";
    this.style.margin = "0";
    this.style.padding = "0";
    this.style.cursor = "arrow";
}