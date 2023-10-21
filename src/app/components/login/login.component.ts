import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import{ValidateForm} from 'src/app/helpers/validateform';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  type:string = "password";
isText:boolean=false;
eyeIcon:string="fa-eye-slash"
loginForm!: FormGroup;
constructor(private fb:FormBuilder, private auth: AuthService, private router: Router){}

ngOnInit():void{
  this.loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
    idNo :['', ],
    email:['', ]
  
  })
}
hideShowPass(){
this.isText=!this.isText;
this.isText?this.eyeIcon = "fa-eye":this.eyeIcon="fa-eye-slash";
this.isText?this.type="text":this.type="password";

}

onLogin(){
  if (this.loginForm.valid) {
    console.log(this.loginForm.value)
    this.auth.login(this.loginForm.value)
      .subscribe({
        next: (res) => {
         if(res.status == true)
         {
          alert(res.message);
          var loginProfileId = res.loginProfileId;
          console.log("after login success" + loginProfileId);
          this.loginForm.reset();
          this.router.navigate(['/dashboard']); 
         }
         else{
          alert(res.message);
         }        
         
        },
        error: (err) => {
          alert(err?.error.message);
        }
      })

  }
  else {
    ValidateForm.validateAllFormFields(this.loginForm);
  }
}


}
