import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfriends',
  templateUrl: './addfriends.component.html',
  styleUrls: ['./addfriends.component.css']
})
export class AddfriendsComponent {

  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""

  constructor(private api:ApiService){}

  readvalues=()=>{
    let data:any={"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
    console.log(data)
    this.api.addfriend(data).subscribe(
      (result:any)=>{
        if(result.status=="success"){
          alert("Friend Details Added Successfully")
          this.name=""
          this.friendName=""
          this.friendNickName=""
          this.DescribeYourFriend=""
        }
        else{
          alert("Something went Wrong")
        }
      }
    )
  }

}
