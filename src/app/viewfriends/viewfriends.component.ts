import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewfriends',
  templateUrl: './viewfriends.component.html',
  styleUrls: ['./viewfriends.component.css']
})
export class ViewfriendsComponent {

  data:any=[]

  constructor(private api:ApiService){

    api.friend().subscribe(

      (response)=>{
        this.data=response;
      }

    )

  }

}
