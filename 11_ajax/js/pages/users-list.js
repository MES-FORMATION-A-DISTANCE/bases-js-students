import { UserRow } from "../components/user-row.js";

const $users = document.querySelector("#users-list");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (users) {
    for (const user of users) {
      $users.innerHTML += UserRow(user);
    }
  });
