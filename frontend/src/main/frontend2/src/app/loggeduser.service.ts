import { Injectable } from '@angular/core';

@Injectable()
export class LoggeduserService {
  
  loggeduser= {
    email:"Default",
    firstName:"Default",
    lastName:"Default",
    password:"Default",
    permission:"Default",
    userName:"Default"
  }

  

  constructor() { }

  

}
