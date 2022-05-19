import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usermodel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Usermodel = new Usermodel();

  constructor(private auth:AuthService,
              private router:Router,) { }

  ngOnInit() {
  }
  onSubmit(){
    this.auth.loginUser(this.user)
      .subscribe((res: any) =>{
        localStorage.setItem('token', res.idToken)
        this.router.navigate(['home']);
      },(err)=>{
        alert(err.error.error.message);
      });
  }


}
