import { Injectable } from '@angular/core';
import { UserModel } from '../model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userList : UserModel[] = [];

  constructor() {}

  //add data in database
  insertUser(user: UserModel) {
    this.userList.push(user);
  }

  //return whole database
  getList(): UserModel[] {
    return this.userList;
  }

  //delete a entry
  deleteUser(index: number) {
    return this.userList.splice(index, 1);
  }
}
