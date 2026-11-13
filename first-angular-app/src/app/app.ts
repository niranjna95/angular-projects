import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';
// import { NgFor, NgIf } from '@angular/common' older version;
@Component({
  selector: 'app-root',
  // imports: [Header, User, Tasks, NgFor, NgIf] older version for calling NgFor,NgIf,
  imports: [Header, User, Tasks],
  templateUrl: './app.html',

  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;
  selectUserId?: string = '';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectUserId);
  }

  onSelectUser(id: string) {
    return (this.selectUserId = id);
  }
}
