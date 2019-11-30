import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as data from '../../shared/data/user-count.json';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  users: any  = (data  as  any).default;
  constructor() { }

  ngOnInit() {
  }

}
