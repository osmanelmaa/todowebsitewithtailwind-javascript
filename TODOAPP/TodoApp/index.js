const textInputDom = document.getElementById("todoinput");
const btnaddTodoDom = document.getElementById("addtodo");
const TodosDOM = document.getElementById("todos");


let textInputValue = "";
let todos = [];


textInputDom.addEventListener("change", function (event){
            textInputValue = event.target.value;
            console.log(textInputValue);
});

let btnaddTodoValue = "";
btnaddTodoDom.addEventListener("click", addTodo)
function addTodo(e){
            e.preventDefault();
            todos.unshift({ id:todos.length + 1, todoTittle:textInputValue });
            document.getElementById("todoinput").value = "";
            displayTodos();
}

function displayTodos(){
            let result = "";

            if(todos.length === 0){
                        TodosDOM.innerHTML = "Liste Boş!";
            }
            else{
                        todos.forEach((item) => {
                                    result += `
                                    <li class="border flex justify-between p-3">
                                    <span class="flex align-center">${item.todoTittle}</span>
                                    <button class="border-l px-6 bg-red-600 relative z-90 text-white" onclick="deleteTodo(${item.id})">Sil</button>
                                    `;
                                   });
            }

         
           TodosDOM.innerHTML = result;
}
function deleteTodo(id){
            let deleteId;
            for(let index in todos){
                        if(todos[index].id == id){
                                    deleteId = index;
                        }
            }
            todos.splice(deleteId, 1);
            displayTodos();
}

displayTodos();
