import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
// import { NgFor, NgIf } from '@angular/common' older version;
@Component({
  selector: 'app-root',
  standalone: false,
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
