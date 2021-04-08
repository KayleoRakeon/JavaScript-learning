var keys = document.querySelectorAll(".key");
var audio = document.querySelectorAll("audio");

document.addEventListener('keydown', function (e) {
    for (i = 0; i < keys.length; i++) {
        if (e.keyCode == keys[i].dataset.key) {
            keys[i].classList.add("playing");

            for (j = 0; j < audio.length; j++) {
                if (e.keyCode == audio[j].dataset.key) {
                    audio[j].load();
                    audio[j].play();
                }
            }
        }
    }
});

document.addEventListener("keyup", function (e) {
    for (i = 0; i < keys.length; i++) {
        if (e.keyCode == keys[i].dataset.key) {
            keys[i].classList.remove("playing");
        }
    }
});