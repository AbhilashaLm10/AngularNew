import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/UserModel';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  userList : UserModel[] = [];
  
  constructor(private userService : UserServiceService, private router: Router) {  
  }

  ngOnInit() {
    this.userList = this.userService.getList();
  }

  delete(index: number) {
    var ans = confirm("Are You Sure You want To delete?")
    if (ans) {
      this.userService.deleteUser(index); //delete from service
    }
  }
}
