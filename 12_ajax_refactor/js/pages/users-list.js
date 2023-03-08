import { UserRow } from "../components/user-row.js";
import { UsersService } from "../services/users.service.js";

class UsersList {
  constructor() {
    this.users = [];
    this.$users = document.querySelector("#users-list");
    this.usersService = new UsersService();
  }

  async render() {
    this.users = await this.usersService.fetchUsers();
    for (const user of this.users) {
      this.$users.innerHTML += UserRow(user);
    }
  }
}

const userListPage = new UsersList();
userListPage.render();
