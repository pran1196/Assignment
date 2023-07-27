import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoggerService } from '../services/logger.service';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  ApiUrl: any = "https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d";
  constructor(private router:Router,private fb: FormBuilder,private http: HttpClient, private logger:LoggerService) {
    this.registrationForm=this.fb.group({
     username:"",
     email:"",
     password:"",
     bio:""
    })
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      bio: ['',[Validators.required,Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    this.http.get<any>(this.ApiUrl).subscribe(data => {
      console.log(data.success);
      if(data.success)
      {
        this.logger.isRegistered=true;
        this.router.navigate(['/profile']);
      }
   },
   error => {
    console.log('Unable to Register', error.error.message);
    
 }
   )
  }
}