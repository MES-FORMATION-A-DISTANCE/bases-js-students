// 1. Remplir le formulaire d'ajout de todo
// 2. Valider le formulaire avant  la creation des todo
// 3. Ajout des todos dans la liste
// 4. Suppression des todos

const $newTodo = document.querySelector("#new-todo");
const $newTodoError = document.querySelector("#new-todo-err");
const $todoForm = document.querySelector("form");
const $todoList = document.querySelector("#todos");
const $submitButtom = document.querySelector("#submit-btn");

$newTodo.addEventListener("input", function () {
  console.log($newTodo.value);
});

$todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if ($newTodo.value.length < 3) {
    $newTodoError.innerText = "Le text doit contenir au moins 3 caracteres";
  } else {
    $newTodoError.innerText = "";
    const $todo = document.createElement("li");
    $todo.addEventListener("click", function () {
      this.classList.toggle("completed");
    });
    $todo.innerText = $newTodo.value;
    // console.log($todo);
    $todoList.append($todo);
    $newTodo.value = "";
  }
});

// 1 . Ajouter un bouton(a droite de chaque todo) qui supprimer les todos. Il doit avoir le text "x"
// 2. Valider le champs du formulaire pendant la saisi
