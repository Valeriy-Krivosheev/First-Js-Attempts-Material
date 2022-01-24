// class Person {
//     constructor(name, age, country, skinColor) {
//         this.name = name;
//         this.age = age;
//         this.country = country;
//         this.skinColor = skinColor;
//     }

//     about() {
//         console.log(this.name +
//             " приехал в " +
//             this.country);
//     }
// }
// const John = new Person('John', 23, 'USA', 'white');
// John.about();

const popup = document.querySelector('.box');



class Modal {
    constructor() {
        this.popup = document.querySelector('.box');
    }
    open() {
        this.popup.style.display = 'block'
    }
    close() {
        this.popup.style.display = 'none'
    }
}

const openButton = document.querySelector('.open');
const closeButton = document.querySelector('.close');
const modal = new Modal();

openButton.addEventListener('click', function(event) {
    setTimeout(() => {
        modal.open()
    }, 2000);

});
closeButton.addEventListener('click', function(event) {
    modal.close()
});

// const fullName = 'Igor';
// console.log(`Hi, my name is ${fullName}`);

newOne = () => {
    console.log('HI');
}
newOne();

const arr = ['this', 'those', 'another', 'other']
arr.forEach(element => {
    console.log(element + 'one');
});