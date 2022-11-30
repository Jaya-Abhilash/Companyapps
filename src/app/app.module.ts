import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from  '@angular/common/http';
import { AddCourseComponent } from './add-course/add-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';
const myRoute : Routes =[
  {
    path:"",
    component:AboutUsComponent
  },
  {
    path:"Contactus",
    component:ContactUsComponent
  },
  {
    path:"adminpage",
    component:AdminPageComponent
  },
  {
    path:"employee",
    component:EmployeeComponent
  },
  {path:"viewcourse",
  component:ViewCourseComponent
  },
  {
    path:"addcourse",
    component:AddCourseComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    NavbarComponent,
    AdminPageComponent,
    EmployeeComponent,
    AddCourseComponent,
    ViewCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
