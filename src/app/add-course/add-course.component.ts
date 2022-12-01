import { Component } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
courseTitle=""
courseDescription=""
courseDuration=""
courseData=""
courseVenue=""
constructor(private api:ApiService){}
readValue = () =>
{
  let data:any ={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseData":this.courseData,"courseDuration":this.courseDuration,"courseVenue":this.courseVenue}
console.log(data)
this.api.addCourse(data).subscribe(
  (response:any) =>{
    console.log(response)
    if (response.status == "success") {
      this.courseTitle=""
      this.courseDescription=""
      this.courseDuration=""
      this.courseData=""
      this.courseVenue=""
    }else {
      alert("Something went wrong")
    }
    }
  
)


    
}
}
  