import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor() { }

  private users: {firstName:string,lastName:string,userName:string,password:string,email:string,permission:string}[]=[];

  getUsers() {
    return this.users;
  }

  getUser(index:number) {
    return this.users[index];
  }

}
