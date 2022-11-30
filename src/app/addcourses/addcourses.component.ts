import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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

  constructor(private api:ApiService){}
  

  readvalue=()=>{

    let data:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
    console.log(data)
 
    this.api.addcourse(data).subscribe(
      (result:any)=>{
        console.log(result)
        if(result.status=="success"){
          alert("Course Added Successfully")
          this.courseTitle=""
          this.courseDate=""
          this.courseDescription=""
          this.courseDuration=""
          this.courseVenue=""
        }
        else{
          alert("Something Went Wrong....")
        }

      }
    )

  }

}
