let slide = document.querySelector('.slide');
let items = document.querySelectorAll('.item');
let interval = 3700; 

function moveToNext() {
    slide.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}


let autoSlide = setInterval(moveToNext, interval);
