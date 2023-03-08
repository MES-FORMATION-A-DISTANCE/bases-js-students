import { BASE_URL } from "../constantes.js";

export class UsersService {
  constructor() {
    this.url = `${BASE_URL}/users`;
  }

  fetchUsers() {
    return fetch(this.url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return data;
      });
  }

  fetchUsersId(id) {
    return fetch(`${this.url}/${id}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return data;
      });
  }
}
