import { Component } from '@angular/core';

@Component({
  selector: 'app-addcourses',
  templateUrl: './addcourses.component.html',
  styleUrls: ['./addcourses.component.css']
})
export class AddcoursesComponent {

  courseTitle=""
  courseDate=""
  courseDuration=""
  courseVenue=""
  courseDescription=""

  

  readvalue=()=>{

    let data:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
    console.log(data)

  }

}
