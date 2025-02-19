const inputtdl = document.querySelector('.textarea');
const buttontdl = document.querySelector('.buttoninput');
const listtdl = document.querySelector('.todolist');
// Function to Remove to do list from local storage
function removeTodoFromStorage(todoId) {
    const todos = getTodosFromStorage();
    const updatedTodos = todos.filter(todo => todo.id != todoId);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
}
