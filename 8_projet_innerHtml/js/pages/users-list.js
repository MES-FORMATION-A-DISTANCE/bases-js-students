import { UserRow } from "../components/user-row.js";
import { users } from "../users.js";
console.log(users);

const $users = document.querySelector("#users-list");

for (const user of users) {
  $users.innerHTML += UserRow(user);
}
