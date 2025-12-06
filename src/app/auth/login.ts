import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth-service';
import { LoginRequest } from './login-request';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {
  form!: UntypedFormGroup;

  constructor (private authService: AuthService) {
    
  }

  ngOnInit(): void {
    //Initialize the form here
    this.form = new UntypedFormGroup({
      // Define form controls here
      Username: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    let loginrequest = <LoginRequest> {
      Username: this.form.controls['Username'].value,
      Password: this.form.controls['Password'].value
    };

    this.authService.login(loginrequest).subscribe({  
      next: (result) => {
        console.log(result);
      },
      error: (err) => {
        console.log(err);
      }
    });
    
  }

}
