import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchcourses=()=>{

    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")

  }

  friend=()=>{

    return this.http.get("https://dummyapifriends.herokuapp.com/view")

  }

  addcourse=(datatosend:any)=>{

    return this.http.post("http://mylinkurcodesapp.herokuapp.com/addcourse",datatosend)

  }

  addfriend=(fdatatosend:any)=>{

    return this.http.post("https://dummyapifriends.herokuapp.com/adddata",fdatatosend)

  }

}
