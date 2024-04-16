console.log([1,-3,4].filter((value, index) => {
    if (value >= 0) {
        return true
    }

    else {
        return false
    }
}));

console.log([1,-3,4].map((value, index) => {
    return value + 10
}));

console.log([1,-3,4].map((value, index) => value + 10))
