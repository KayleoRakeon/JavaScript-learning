***Ce fichier README.md contient quelques indications concernant les différents exercices, sur la manière dont je les ai pensés et sur les problèmes que j'ai rencontré.***

### Exercice 1 - Spoiler Button
Je n'avais au début pas compris que le **querySelectorAll()** récupérait un *array*. J'ai donc dû utiliser une boucle **for{}** pour récupérer et exploiter les éléments qu'il contient.

### Exercice 2 - Janken
Pour ce jeu, il s'agira d'affronter une IA qui choisit une choix parmi Pierre Feuille et Ciseau aléatoirement, peu importe le choix de l'utilisateur. 
Le code qui permet de générer ce choix aléatoire m'a posé quelques soucis de compréhension pour le mettre en place. Après en avoir analyser la logique, je pense pouvoir le réutiliser sans problème à l'avenir. 
J'ai également pris la liberté d'afficher en toute lettre le choix que survol l'utilisateur, ce afin de dynamiser un peu le tout. 

### Exercice 3 - Drum Kit 
Dans un premier temps, j'ai eu du mal à comprendre comment faire comprendre au navigateur que l'on avait appuyé sur une touche précise. J'ai pensé à utiliser un **addEventListener()** pour chaque touche, mais j'ai essayé de l'optimisé et le généraliser directement. Finalement, il semble que ça marche correctement. 
Arriva ensuite le problème de relancer le son joué lorsqu'un touche est préssé. Finalement, il s'agissait d'une simple commande, ça ne m'a pas demandé trop de temps à régler. 

### Exercice 4 - Juste Prix 
J'ai pris la liberté de réaliser un exercice en plus que j'avais fait il y a un moment déjà pour m'amuser. Comme j'en avait l'habitude avec les **addEventListener()**, j'ai utilisé ici des fonctions fléchées que je trouve plus claires et plus propres. 
J'ai eu un problème avec la ligne **e.preventDefaut()**, je ne l'utilisais pas et je ne comprenais pas à quoi elle servait. Après quelques recherches sur internet pour éviter que la page se recharge à chaque envoi du formulaire, j'ai compris qu'il me manquait cette commande pour éviter le rafraichissement de la page. 

### Exercice 5 - To do list