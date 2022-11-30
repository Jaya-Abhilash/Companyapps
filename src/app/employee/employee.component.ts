import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
username =""
password =""
constructor(private route:Router){}
login = () =>{
  let data:any = {
    "username":this.username,
    "password":this.password
  }
  if (this.username == "abhi" && this.password == "abhi") {
    alert("Authentication Success \b Welcome ")
    this.route.navigate(["/employeeHome"])
  } else {
    alert("Login Failed!!!")
    this.username = ""
    this.password = ""
  }
}
}

