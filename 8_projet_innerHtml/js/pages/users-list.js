import { users } from "../users.js";
console.log(users);

const $users = document.querySelector("#users-list");

for (const user of users) {
  $users.innerHTML += `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.address.city}</td>
        <td>${user.phone}</td>
        <td>${user.company.name}</td>
        <td><a href="./pages/user-details.html?id=${user.id}">Voir</a></td>
    </tr>`;
}
