const age = 21

if (age > 20) {
    console.log('You are over 20')
}

let names = ['Kevin', 'Sambhav', 'Dev']

if (names.length > 2) {
    console.log("Overflow")
}

let password = 'kevindd@dddddddddddddd'

if (password.length >= 12 && password.includes("@")) {
    console.log('Password is very strong')
}
else if (password.length >= 8) {
    console.log('Password is strong')
}

else {
    console.log('Password is weak')
}

let isWeak = false

if (!isWeak) {
    console.log("Strong")
}