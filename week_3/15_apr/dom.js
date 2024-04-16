const para = document.querySelector('p')
console.log(para);

console.log(para.innerText);

para.innerText = "Hi"

const paras = document.querySelectorAll('p')
console.log(paras);

const paraWithError = document.querySelector('p.error')
console.log(paraWithError);

paraWithError.innerHTML += '<h1>Hi</h2>'
paraWithError.style.color = 'blue'

const title = document.getElementById('page-title')
console.log(title);

const people = ['Kevin', 'Rahul', 'Sambhav']

people.forEach(person => {
    paraWithError.innerHTML += `<p>${person}</p>`
})

const buttonElement = document.querySelector('.button')

const evenListener = () => {
    console.log('click');
}

buttonElement.addEventListener('click',evenListener)