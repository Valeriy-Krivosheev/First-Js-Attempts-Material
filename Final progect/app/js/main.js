const title = document.querySelector('.title');
const letters = title.innerText.split('')
let html = "";

letters.forEach(letter => {
    let classes = ''
    if (letter !== ' ') {
        classes = 'js-letter'
    }
    html = html + `<span class='${classes}'>${letter}</span>`
});
title.innerHTML = html;


const jsLetter = document.querySelectorAll('.js-letter');
jsLetter.forEach(node => {
    node.addEventListener('mouseover', function(event) {
        this.classList.add('active')
    })
    node.addEventListener('mouseout', function(event) {
        this.classList.remove('active')
    })
})