
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // Your profile data
  userProfile: any = {
    name: '',
    email: '',
    bio:'',
    img: ''
  };
  ApiUrl: any = "https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2";
  constructor(private router:Router,private fb: FormBuilder,private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(this.ApiUrl ).subscribe(data => {
      //console.log(data);
      this.userProfile=data
   },
   error => {
     console.log('Unable to fetch profile', error.error.message);
     alert("Unable to fetch details")
      this.router.navigate(['/']);
 });
  }
}
