function greet() {
    console.log('Hello')
}

greet()

const speak = function (name = 'Rahul') {
    console.log(`Good morning ${name}`)
}

speak('Kevin')
speak()

const calcArea = function (radius) {
    let area = 3.14 * radius ** 2
    return area
}

console.log(calcArea(5))

// arrow function 

const calcAreaArrow = (radius) => {
    return 3.14 * radius ** 2
}

console.log(calcAreaArrow(2))

const calcAreaSqaure = length => length * length

console.log(calcAreaSqaure(2))

// callback function 

const myFunc = (callbackFunc) => {
    let value = 10
    callbackFunc(value)
}

myFunc(function (value) {
    console.log(value)
});

myFunc(value => {
    console.log(value)
})

// for each

let names = ['Kevin', 'Sambhav', 'Dev']
names.forEach(function (name) {
    console.log(name)
})

names.forEach((name, index) => {
    console.log(index, name)
})