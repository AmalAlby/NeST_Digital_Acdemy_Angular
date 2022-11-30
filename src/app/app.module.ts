import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ViewcoursesComponent } from './viewcourses/viewcourses.component';
import { ViewfriendsComponent } from './viewfriends/viewfriends.component';


const myroute:Routes=[
  {
    path:"",
    component:HomepageComponent
  },
  {
    path:"gallery",
    component:GalleryComponent
  },
  {
    path:"about",
    component:AboutusComponent
  },
  {
    path:"contact",
    component:ContactusComponent
  },
  {
    path:"admlogin",
    component:AdminloginComponent
  },
  {
    path:"viewc",
    component:ViewcoursesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GalleryComponent,
    AboutusComponent,
    ContactusComponent,
    AdminloginComponent,
    ViewcoursesComponent,
    ViewfriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
