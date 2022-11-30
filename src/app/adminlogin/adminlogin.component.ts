import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  username=""
  password=""

  constructor(private route:Router){}

  admlog=()=>{

    let data:any={"username":this.username,"password":this.password}
    console.log(data)

    if(data.username=="admin" && data.password=="nestdigital"){
      this.route.navigate(["/viewc"])
    }

  }

}
