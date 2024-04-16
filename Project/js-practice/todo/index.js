const todoList = [];

function renderTodoList() {
    let todoListHTML = ''
    todoList.forEach((todoObject, index) => {        
        // name = todoObject.name
        // dueDate = todoObject.dueDate
        const { name, dueDate } = todoObject // shorthand property of above
        const html = `
        <div>${name}</div> 
        <div>${dueDate}</div> 
        <button class="delete-todo-button" onclick="todoList.splice(${index}, 1);renderTodoList();">Delete</button>
        `
        todoListHTML += html
    });

    document.querySelector('.todo-container').innerHTML = todoListHTML
}

function addTodo() {
    const inputElement = document.querySelector('.todo-input')
    const dateInputElement = document.querySelector('.todo-due-date')
    const name = inputElement.value
    const dueDate = dateInputElement.value
    
    // todoList.push({name: name, dueDate: dueDate})
    todoList.push({name, dueDate}) // shorthand property for above
    inputElement.value = ''
    renderTodoList()
}

function handleCostKeydown(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}