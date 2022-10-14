import { LoginService } from 'src/app/services/login/login.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component implements OnInit {

  firstName: any;
  lastName:any;

  @Output() toggleSidebarForMe: EventEmitter<any>= new EventEmitter();
  constructor(private userService:UserService, private loginService:LoginService) { }

  ngOnInit(): void {
  
    this.firstName= this.loginService.getUserFirstName();
    this.lastName= this.loginService.getUserLastName();

  }
  
  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }

  logoutUser(){
    this.loginService.logout();
    
  }

}
