import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchCourses = () =>
  {
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
addCourse = (dataToSend:any) =>
{
  return this.http.post("https://mylinkurcodesapp.herokuapp.com/getcourses",dataToSend)
}
  }
