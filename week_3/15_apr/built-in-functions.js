setTimeout(function () {
    console.log('timeout')
}, 3000)

console.log('Next line');

setInterval(() => {
    console.log('interval');
}, 3000);

console.log('next line after interval');