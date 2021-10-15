const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

//Selezioniamo gli elementi della dom che vogliamo manipolare
//seleziono i 2 bottoni
const button_up_element = document.getElementById("up");
const button_down_element = document.getElementById("down")

//inserisco la prima immagine in sequenza nel primary_img
const primary_image_element = document.querySelector(".primary_img");
const img_element = document.createElement("img")
primary_image_element.insertAdjacentElement("afterbegin", img_element);
img_element.src = items[0];
