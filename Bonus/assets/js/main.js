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
const primary_image_element = document.querySelector(".primary_img");
const carousel_element = document.querySelector(".carousel")


let item = "";
let thumb = "";
let position = 0;

//inserisco le immagini dentro il carosello
for (let i = 0; i < items.length; i++) {
    item += `
    <div class="item">
        <img src="${items[i]}" alt="">
        <div class="text">
            <h3>${title[i]}</h3>
            <p>${text[i]}</p>
        </div>
    </div> `;

    thumb += `
    <div class="thumb">
        <img src="${items[i]}" alt="">
    </div>`
}

primary_image_element.innerHTML = item;
document.getElementsByClassName("item")[position].classList.add("active")
carousel_element.innerHTML = thumb;
document.getElementsByClassName("thumb")[position].classList.add("active")

button_up_element.addEventListener("click", function () {

    if (position <= 0) {
        position = items.length - 1;

    } else {
        position--;
    }

    primary_image_element.innerHTML = item;
    document.getElementsByClassName("item")[position].classList.add("active")
    carousel_element.innerHTML = thumb;
    document.getElementsByClassName("thumb")[position].classList.add("active")
})

button_down_element.addEventListener("click", function () {

    if (position < items.length - 1) {
        position++;
    }
    else {
        position = 0;
    }

    primary_image_element.innerHTML = item;
    document.getElementsByClassName("item")[position].classList.add("active")
    carousel_element.innerHTML = thumb;
    document.getElementsByClassName("thumb")[position].classList.add("active")
})


