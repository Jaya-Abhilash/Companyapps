import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  username=""
  password=""

  constructor(private route:Router){}

  adminloginCheck=() =>
  {
    if(this.username=="admin" && this.password=="nestdigital")
    {
      this.route.navigate(["/adminPage"])
    }
    else
    {
      alert("Invalid credentials")
      this.username=""
      this.password=""
    }

  }
}