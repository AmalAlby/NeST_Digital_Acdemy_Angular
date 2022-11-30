import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empportal',
  templateUrl: './empportal.component.html',
  styleUrls: ['./empportal.component.css']
})
export class EmpportalComponent {

  id=""
  password=""

  constructor(private route:Router){}

  emplog=()=>{
    let data:any={"id":this.id,"password":this.password}
    console.log(data)

    if(data.id=="1122" && data.password=="12345"){
      this.route.navigate(["/addc"])
    }
  }

}
