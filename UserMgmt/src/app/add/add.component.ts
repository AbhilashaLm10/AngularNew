import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../model/UserModel';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  user : UserModel;

  constructor(private userService : UserServiceService, private router: Router) { 
    this.user = new UserModel();
  }

  ngOnInit() {
  }

  saveUser() {
      this.userService.insertUser(this.user);
      this.router.navigate(['show']);
  }
  
}
