// 1. Remplir le formulaire d'ajout de todo
// 2. Valider le formulaire avant  la creation des todo
// 3. Ajout des todos dans la liste
// 4. Suppression des todos

const $newTodo = document.querySelector("#new-todo");
const $newTodoError = document.querySelector("#new-todo-err");
const $todoForm = document.querySelector("form");
const $todoList = document.querySelector("#todos");
const $submitButton = document.querySelector("#submit-btn");

$newTodo.addEventListener("input", function () {
  if (this.value.length < 3) {
    $newTodoError.innerText = "Le text doit contenir au moins 3 caracteres";
    $submitButton.disabled = true;
  } else {
    $newTodoError.innerText = "";
    $submitButton.disabled = false;
  }
});

$todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const $todo = document.createElement("li");
  $todo.addEventListener("click", function () {
    this.classList.toggle("completed");
  });

  const $deleteButton = document.createElement("button");
  $deleteButton.innerText = "x";
  $deleteButton.addEventListener("click", function (e) {
    e.stopPropagation();
    const confirmDelete = confirm(
      `Voulez-vous vraiment supprimer la tache "${$newTodo.value}"`
    );
    if (confirmDelete) {
      this.parentElement.remove();
    }
  });
  $todo.innerText = $newTodo.value;
  // console.log($todo);
  $todo.appendChild($deleteButton);
  $todoList.appendChild($todo);

  $newTodo.value = "";
});
