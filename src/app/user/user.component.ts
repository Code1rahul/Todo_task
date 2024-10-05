import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

import { type user } from './user.model';
import { CardComponent } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];
  @Input({ required: true }) user!: user;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter(); //coustom event created as 'select' with EventEmitter lisnner

  get imgPath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
