import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empreg',
  templateUrl: './empreg.component.html',
  styleUrls: ['./empreg.component.css']
})
export class EmpregComponent {


  constructor(private route:Router){}
  
  empid=""
  firstname=""
  lastname=""
  houseno=""
  housename=""
  streetname=""
  pincode=""
  district=""
  state=""
  country=""
  mobile=""
  email=""
  parentname=""
  gender=""
  degree=""
  yoe=""
  doj=""
  username=""
  password=""
  cpassword=""


  readValues=()=>{
    if(this.password==this.cpassword){
      alert("Registered Successfully")
      this.route.navigate(["/employeelogin"])
    }else{
      alert("Password and confirm password not match")
    }
  }


}
