import {Component, ElementRef, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {
  }

  ngOnInit() {
  }
  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
