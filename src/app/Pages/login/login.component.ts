import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formLogin!: FormGroup;
  email!: any
  password!: any
  constructor(private loginServive: LoginService, private formBuilder: FormBuilder, private router: Router)
  {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  OnLogin()
  {
    if(this.formLogin.valid)
    {
      var loginData = {
         email: this.email,
         password: this.password
       }
       this.loginServive.Onlogin(loginData).subscribe((res:any)=>{
        if(res.result){
          this.router.navigateByUrl('');
          localStorage.setItem('loginToken', res.token);
          alert('Connection réussie')
        }else{
          alert('Connection echouée')
        }
       })

    }

  }
}
