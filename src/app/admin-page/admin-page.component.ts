import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
username =""
password =""
constructor(private route:Router){}
login = () =>
{
  let data:any = {
    "username":this.username,
    "password":this.password
  }
  if (this.username == "adminpage" && this.password == "company") {
    alert("Login Successfull\b Welcome Admin")
    this.route.navigate(["/adminHome"])

  } else {
    alert("Login Failed!!!")
    this.username = ""
    this.password = ""
  }
}}
