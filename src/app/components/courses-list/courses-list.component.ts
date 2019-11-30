import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as data from '../../shared/data/course-data.json';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses: any  = (data  as  any).default;

  constructor() { }

  ngOnInit() {

  }

}
