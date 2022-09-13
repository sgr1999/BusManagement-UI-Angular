import { LoginService } from './../../../services/login/login.service';
import { UserService } from './../../../services/user/user.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
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
