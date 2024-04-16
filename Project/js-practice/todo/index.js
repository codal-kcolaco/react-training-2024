const todoList = [];

function renderTodoList() {
    let todoListHTML = ''
    todoList.forEach(element => {
        const html = `<p>${element}</p>`
        todoListHTML += html
    });

    document.querySelector('.todo-container').innerHTML = todoListHTML
}

function addTodo() {
    const inputElement = document.querySelector('.todo-input')
    const name = inputElement.value
    
    todoList.push(name)
    inputElement.value = ''
    renderTodoList()
}

function handleCostKeydown(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}