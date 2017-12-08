import { NgForm } from '@angular/forms';
import { LoggeduserService } from './../loggeduser.service';
import { UsersService } from './../users.service';
import { EventsService } from './../events.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  loginLink=false;
  logged=false;
  user;
  constructor(private eventsService:EventsService,
              private users:UsersService,
              private loggedUser:LoggeduserService) { }

  ngOnInit() {
    this.user=this.loggedUser.loggeduser;
  }

  onLoginClick() {
    this.loginLink=!this.loginLink;
  }

  onLoggedButtonClicked(felhasznalo,jelszo) {
//    this.logged=!this.logged;
//    this.loginLink=!this.loginLink;
    for(let i=0;i<this.users.getUsers().length;i++){
      console.log(this.users.getUsers()[i]);
      if(felhasznalo.value === this.users.getUsers()[i].userName){
        if(jelszo.value === this.users.getUsers()[i].password){
          console.log("sikeres belepes");
          this.loggedUser.loggeduser.email=this.users.getUsers()[i].email;
          this.loggedUser.loggeduser.firstName=this.users.getUsers()[i].firstName;
          this.loggedUser.loggeduser.lastName=this.users.getUsers()[i].lastName;
          this.loggedUser.loggeduser.password=this.users.getUsers()[i].password;
          this.loggedUser.loggeduser.permission=this.users.getUsers()[i].permission;
          this.loggedUser.loggeduser.userName=this.users.getUsers()[i].userName;
          this.logged=!this.logged;
          this.loginLink=!this.loginLink;
        }
      }
    }
//    console.log(felhasznalo.value);
//    console.log(jelszo.value);
  }

  typedList(type:string){
    this.eventsService.setEventsFromType(type);
    console.log(this.eventsService.getActualList());
  }

}
