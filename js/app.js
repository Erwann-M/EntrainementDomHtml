// Selectionner un élément par son id 
let title = document.getElementById('title');

//récuperer le texte dans le noeud
console.log(title.innerText);
//récupérer le text avec ces balises qui sont a l'interieur du noeud
console.log(title.innerHTML);

// Modifier le contenu text (ne vas pas prendre en compte les balises html)
title.innerText = '<em>Nouveau</em> titre';
// Modifier le contenu HTML (vas prendre en compte les balises html)
title.innerHTML = '<em>Nouveau</em> titre';

// Selectionner par la class 
let citation = document.getElementsByClassName('citation');
console.log(citation);      // Nous ressort un tableau
console.log(citation[1]);   // Tableau a l'index 1

// Selectionner par leurs balises
let paragraphe = document.getElementsByTagName('p');
console.log(paragraphe);
console.log(paragraphe[0].innerText); // Récupere l'element 0 du tableau paragraphe et affiche le text 
console.log(paragraphe[0].innerHTML); // Pareil, mais récupere les balises html avec.

// Methode pour selectionner via selecteur css 
console.log(document.querySelector('.citation'));
console.log(document.querySelector('#title'));

// Récuperer Attribut HTML
let a = document.querySelector('a');    // On selectionne la balise <a>
console.log(a.getAttribute('href'));    // Puis on récupere l'attribut href de la balise a.

// si on veut modifier cet attribut 
a.setAttribute('href', 'https://developer.mozilla.org/'); // on met en premier l'attribut ciblé puis la nouvelle valeur a entrer


// Modifier le style CSS
document.querySelector('p').style.backgroundColor = '#eee'; // vas ajouter un attribut style directement sur la balise html (donc prioritaire par rapport au css )

// Récuperer le liste des class CSS d'un element html
console.log(document.querySelector('p').classList); // Nous donne la liste des class atribuer a la balise p

// Ajouter une class CSS a un element 
document.querySelector('p').classList.add('fondVert');

// Supprimer une class CSS a un element html
document.querySelector('p').classList.remove('fondVert');

// On peut selectionner plus précisément avec les selecteurs avancé de CSS
let tableauLi = document.querySelectorAll('ul li:nth-child(even)');
console.log(tableauLi);    // Ca nous ressort les éléments li pair sous forme d'un tableau

// donc si on veut appliquer le style 'fondVert' sur ces elément, il faut faire une boucle (vue que c'est un tableau)
for (let li of tableauLi) {
    li.classList.add('fondVert');
}

// Tester la présence d'une class CSS sur un element html
if (document.querySelector('li:nth-child(2)').classList.contains('fondVert')) { // contains vas nous retourner ici true ou false
    console.log('la classe verte est affectée');
}

// Echanger la présence ou non d'une class CSS a un element html
document.querySelector('p').classList.toggle('fondVert'); // Avec "toggle" si l'élément contient la class "fondVert" il l'a retire et si il ne contient pas la class "fondVert" il l'ajoute.

// Déplacer des elements html 
let deplacementTitre = document.querySelector('h1');        // ici on selectionne la balise h1
document.querySelector('p').appendChild(deplacementTitre);  // on selectionne la balise p et on lui ajoute un enfant (la balise h1)

