import { getParam } from "../utils/get-param.js";

const id = parseInt(getParam("id"));

const $details = document.querySelector("#details");

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (user) {
    $details.innerHTML = `
    <h1>${user.name}@<i>${user.username}</i></h1>
    <h2><a href="mailto:${user.email}">${user.email}</h2>
    <p><a href="tel:${user.phone}">${user.phone}</a></p>
    <p><b>${user.company.name}</b></p>
    <bloquotes><i>"${user.company.catchPhrase}"</i></bloquotes>
`;
  });
