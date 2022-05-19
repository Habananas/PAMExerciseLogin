import { Component, OnInit } from '@angular/core';
import { Usermodel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'

import{NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

//inititalize new variable ofUsermodel
  user: Usermodel = new Usermodel();

  constructor(private auth: AuthService,
              private router:Router ) {
      

   }

  ngOnInit(): void {
  }
  onSubmit(){
  this.auth.newUser(this.user)
  .subscribe((res:any)=>{
    alert('Successful Registration'),
    this.router.navigate(['login'])
    }, (err) => {
      if (err.error.error.message === 'EMAIL_EXISTS'){
      alert('Already Registered!')
      }
    })
  }  

}
