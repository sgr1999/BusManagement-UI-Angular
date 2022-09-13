import { UserService } from './../../services/user/user.service';
import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }
  hide = true;
  

  constructor(private loginService:LoginService, private userService:UserService) { }

  ngOnInit(): void {
    this.userService.setUsername(this.credentials.username);
  }

  onSubmit(){
    console.log(this.credentials)
    console.log("ok")
    if ((this.credentials.username!='' && this.credentials.password!='') && this.credentials.username!=null && this.credentials.password!=null) {
      
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          console.log(response.token)
          console.log(response.firstName)
          console.log(response.lastName)
          this.loginService.loginUser(response.token,response.firstName,response.lastName,response.mobileNumber);
          
          window.location.href='/home'
        },
        error=>{
          console.log(error);
        }
      )
    }
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

 
}
