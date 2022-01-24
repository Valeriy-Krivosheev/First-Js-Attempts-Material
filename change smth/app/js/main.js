let background = document.querySelector('.input__bg');
let color = document.querySelector('.input__color');
let fontSize = document.querySelector('.input__size');
let body = document.querySelector('body');


background.addEventListener('keyup', function(event) {
    body.style.backgroundColor = event.target.value;
});

color.addEventListener('keyup', function(event) {
    body.style.color = event.target.value;
});

fontSize.addEventListener('keyup', function(event) {
    body.style.fontSize = event.target.value + 'px';
});