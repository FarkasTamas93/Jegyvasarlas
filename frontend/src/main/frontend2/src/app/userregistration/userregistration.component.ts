import { UsersService } from './../users.service';
import { DatabaseService } from '../database.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {

  @ViewChild('f') newUserForm: NgForm;

  newUser = {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    email: '',
    permission:'avarage'
  }

  constructor(private databaseService:DatabaseService,
              private usersService:UsersService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.newUserForm);

    this.newUser.firstName = this.newUserForm.value.userFirstName;
    this.newUser.lastName = this.newUserForm.value.userLastName;
    this.newUser.userName = this.newUserForm.value.userLoginName;
    this.newUser.password = this.newUserForm.value.userPassword;
    this.newUser.email = this.newUserForm.value.userEmail;

    this.usersService.getUsers().push(this.newUser);
    this.databaseService.storeUsers(this.usersService.getUsers()).subscribe((response) => console.log(response),(error) =>console.log(error));

    console.log(this.newUser);
  }

}
