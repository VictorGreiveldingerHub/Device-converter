# Device-converter
Convertisseur de devises
Convertisseur de devises
Objectif : créer un widget avec React, c'est-à-dire une micro-application qu'on pourrait embarquer dans des pages web.

Objectif
Ici, on souhaite créer un convertisseur de devises.

Pour implémenter l'application, on utilisera, si besoin d'état, des class (pas de hooks).



Instructions - Phase 1
Dans cette phase, l'application React est statique. Notamment, le montant à convertir est fixé dans le code.

Commencer par la structure fondamentale (les blocs principaux) statique :
Statique == aucune réaction à des événements utilisateurs
Créer les composants React…
… avec leurs styles (soyez créatifs, le gif est juste un exemple)…
… et des données en dur dans chaque composant (pas de passage de props pour le moment)
Créer une source de données et faire circuler l'information :
Oh, tiens, un fichier src/data/currencies.js est fourni !
Identifier les données à transmettre, dans quel composant
Dans le composant racine, charger les données des devises et utiliser des props pour alimenter les composants de présentation
Instructions - Phase 2
Dans cette phase, l'application React se dynamise en partie : quand on clique sur une devise, le montant (fixe) à convertir est converti et le résultat s'affiche.

Mettre en place l'écouteur d'événement approprié
Mettre en place la modification du state requise
Utiliser le state pour dynamiser l'affichage
Instructions - Phase 3 (exploratoire/bonus)
Dans cette phase, l'application React se dynamise totalement : on peut interagir avec le formulaire pour modifier le montant à convertir, ce qui met à jour le montant converti, en tenant compte des devises courantes.

Indice : https://fr.reactjs.org/docs/forms.html#controlled-components
