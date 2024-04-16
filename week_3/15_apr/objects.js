let user = {
    name: 'Kevin',
    age: 21,
    location: 'Adipur',
    login: function () {
        console.log('User login');
    },
    changeAge(age) {
        this.age = age
    }
}

console.log(user)
console.log(user.name)
console.log(user['name'])
user.login()
user.changeAge(25)
console.log(user); 