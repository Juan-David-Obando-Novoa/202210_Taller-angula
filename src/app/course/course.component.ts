import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';
import { dataCourses } from './dataCourses';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Array<Course> = [];
  constructor() { }
  getCourseList(): Array<Course> {
    return dataCourses;
  }

  promedio(): number{
    let promedio = 0
    dataCourses.forEach((course) => {
      promedio += course.credits
    });

    return promedio
  }
  ngOnInit() {
    this.courses = this.getCourseList();
  }

}
