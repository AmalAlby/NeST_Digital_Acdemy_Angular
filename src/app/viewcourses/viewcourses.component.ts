import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewcourses',
  templateUrl: './viewcourses.component.html',
  styleUrls: ['./viewcourses.component.css']
})
export class ViewcoursesComponent {

  course:any=[]

  constructor(private api:ApiService){

    api.fetchcourses().subscribe(

      (response)=>{
        this.course=response;
      }

    )

  }

}
