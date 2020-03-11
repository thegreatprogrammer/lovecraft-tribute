// VAR

let parent = document.getElementById("parent");
let navbar = document.getElementById("navbar");

// FUNCTIONS

//Función para crear un array a partir de un conjunto de elementos de una clase, y determinar cuál de ellos recibió click. Retorna el índice del elemento en cuestión.
const indexArray = (e, parentElement, clase) =>{
    let indexArray = Array.from(parentElement.querySelectorAll(clase)),
        index = indexArray.indexOf(e.target);
    return index;
}

//Función encargada de modificar las clases active de los elementos del menú, a medida que el usuario hace click sobre cada uno
const changeActive = (item) =>{

    //Almacenando en un array todos los elementos a con clase nav-link, hijos de navbar
    let nav = Array.from(navbar.querySelectorAll('a.nav-link'));
    //Recorriendo el array, accediendo al elemento padre de cada elemento a (un elemento li).
    //Se elimina la clase active de todos
    nav.map(element => element.parentElement.classList.remove('active'));

    //Se toma el elemento que coincide con el índice proporcionado (al cual el usuario hizo click), y se le añade la clase active.
    nav[item].parentElement.classList += ' active';
}

//Esta función compara el índice del elemento seleccionado del menú, con los índices de los poemas. Muestra exclusivamente el poema cuyo índice coincida con el proporcionado.
const displayPoem = poemIndex =>{

    //Array con todos los elementos que conforman los poemas
    let indexArray = Array.from(parent.children);

    //Ocultando todos los elementos
    indexArray.map(element => element.style.display = 'none');

    //Filtrando el elemento cuyo índice coincida con el proporcionado
    let pair = indexArray.filter(element => indexArray.indexOf(element) === poemIndex);
    
    //Mostrando el poema resultado del filtrado
    pair[0].style.display = 'flex';

}

// EVENT

navbar.addEventListener("click", e =>{

    //Índice del item del menú al que se le hizo click
    let index = indexArray(e, navbar, 'a.nav-link');

    changeActive(index);

    displayPoem(index);

});
