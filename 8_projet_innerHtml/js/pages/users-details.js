import { users } from "../users.js";

const urlParam = new URLSearchParams(location.search);
const id = parseInt(urlParam.get("id"));

// const user = users.find((user) => user.id === id);
const user = users.find(function (user) {
  return user.id === id;
});

const $details = document.querySelector("#details");

$details.innerHTML = `
    <h1>${user.name}@<i>${user.username}</i></h1>
    <h2><a href="mailto:${user.email}">${user.email}</h2>
    <p><a href="tel:${user.phone}">${user.phone}</a></p>
    <p><b>${user.company.name}</b></p>
    <bloquotes><i>"${user.company.catchPhrase}"</i></bloquotes>
`;
