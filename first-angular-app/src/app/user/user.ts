import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { UserModel } from './user.model';
import { Card } from '../shared/card/card';

const selectedIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) users!: UserModel;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return './assets/users/' + this.users.avatar;
  }
  onSelectUser() {
    this.select.emit(this.users.id);
  }
}
