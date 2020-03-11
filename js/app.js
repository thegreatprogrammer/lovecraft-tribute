// VAR

let parent = document.getElementById("parent");
let navbar = document.getElementById("navbar");

//Función para crear un array a partir de un conjunto de elementos de una clase, y determinar cuál de ellos recibió click. Retorna el índice del elemento en cuestión.
const indexArray = (e, parentElement, clase) =>{
    let indexArray = Array.from(parentElement.querySelectorAll(clase)),
        index = indexArray.indexOf(e.target);
    return index;
}

const displayPoem = poemIndex =>{
    let indexArray = Array.from(parent.children);
    
    indexArray.map(element => element.style.display = 'none');

    let pair = indexArray.filter(element => indexArray.indexOf(element) === poemIndex);
    
    pair[0].style.display = 'flex';
}

navbar.addEventListener("click", e =>{
    let index = indexArray(e, navbar, 'a.nav-link');
    displayPoem(index)
});