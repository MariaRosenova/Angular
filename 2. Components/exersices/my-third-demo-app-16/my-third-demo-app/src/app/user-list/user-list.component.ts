import { Component } from '@angular/core';


type User = {
  name: string;
  age: number;
};

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {

  users = [
    { name: 'Maria', age: 30 },
    { name: 'Boris', age: 20 },
    { name: 'Simeon', age: 21 },
    { name: 'Anna', age: 25 },
  ] as User[];


}
