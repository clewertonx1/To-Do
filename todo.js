var listElement = document.querySelector("#app ul")
var inputElement = document.querySelector("#app input")
var buttonElement = document.querySelector("#app button")


var todos = JSON.parse(localStorage.getItem('list_todos')) || [];



function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        var buttonDeleteElement = document.createElement('button');
        buttonDeleteElement.setAttribute("type","button")
        buttonDeleteElement.setAttribute("class","btn btn-danger")

        var buttonModifyElement = document.createElement('button');
        buttonModifyElement.setAttribute("type","button")
        buttonModifyElement.setAttribute("class","btn btn-info")

        var deleteText = document.createTextNode('Delete');
        var modifyText = document.createTextNode('Modify');

        var pos = todos.indexOf(todo);
        
        buttonModifyElement.setAttribute("onclick", 'deleteTodo(' + pos +')');
        buttonModifyElement.appendChild(modifyText);
        buttonDeleteElement.setAttribute("onclick", 'deleteTodo(' + pos +')');
        buttonDeleteElement.appendChild(deleteText);
        

        
        
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        listElement.appendChild(buttonModifyElement);
        listElement.appendChild(buttonDeleteElement);
    }
}
renderTodos();

buttonElement.onclick = addTodo;

function addTodo(){
    var todoText = inputElement.value;
    console.log(todoText)
    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveStorage();
}

function saveStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveStorage();
};

function modifyTodo(pos){
    
}