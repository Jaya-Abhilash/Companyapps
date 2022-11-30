import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
const myRoute : Routes =[
  {
    path:"",
    component:AboutUsComponent
  },
  {
    path:"Contactus",
    component:ContactUsComponent
  }


]
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
