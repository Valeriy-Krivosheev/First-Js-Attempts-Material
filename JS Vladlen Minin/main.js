// // Objects
// const person = Object.create({
//   calculateAge(){
//     console.log('Age', new Date().getFullYear() - this.birthYear)
//   }
// }, {
//   name: {
//     value: 'Vladilen',
//     enumerable: true,
//     writable: true,
//     configurable: true, // эти значение по умолчанию false. Они не позволяют изменять объект
//   },
//   birthYear: {
//     value: 1993,
//     enumerable: false,
//     writable: false,
//     configurable: false,
//   },
//   age: {
//     get() {
//       return new Date().getFullYear() - this.birthYear
//     },
//     set() {
//       console.log('Set age', value);
//     }
//   }
// })














// const Animal = {
//   name: 'Animal',
//   age: 5,
//   isBig: true
// }
class Animal {
    static type = 'ANIMAL' // переменная или метод является статическим, то он доступен только классу
    constructor(options) {
        this.name = options.name,
            this.age = options.age,
            this.isBig = options.isBig
    }
    voice() {
        console.log('I am an animal');
    }
}
// const animal = new Animal({
//   name: 'Animal',
//   age: 5,
//   isBig: true,
// })

// class Cat extends Animal {
//     static type = 'CAT'

//     constructor(options) {
//         super(options)
//         this.color = options.color
//     }
//     voice() {
//         super.voice()
//         console.log('I am a cat');
//     }
//     get ageInfo() {
//         return this.age * 7
//     }
//     set ageInfo(newAge){
//         this.age = newAge
//     }
// }

// const cat = new Cat({
//     name: 'Cat',
//     age: 7,
//     isBig: true,
//     color: 'black',
// })




class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }
    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})

const box2 = new Box({
    selector: '#box2',
    size: 120,
    color: 'yellow'
})

const box3 = new Box({
    selector: '#box3',
    size: 120,
    color: 'black'
})

class circle extends Box {
    constructor(options) {
        super(options)
        this.$el.style.borderRadius = '50%'
    }
}

const c = new circle({
    selector: '#circle',
    size: 90,
    color: 'green'
})


