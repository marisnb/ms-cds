import {Component, OnInit, Inject, Renderer, ElementRef, ViewChild, HostListener} from '@angular/core';
import 'rxjs/add/operator/filter';
import { NavbarComponent } from './shared/navbar/navbar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ms-cds';
  // @ts-ignore
  @ViewChild(NavbarComponent) navbar: NavbarComponent;
  constructor( private renderer: Renderer, private element: ElementRef) {}
  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
    this.renderer.listenGlobal('window', 'scroll', (event) => {
      const height = window.scrollY;
      if (height > 150 || window.pageYOffset > 150) {
        // add logic
        navbar.classList.remove('navbar-transparent');
      } else {
        // remove logic
        navbar.classList.add('navbar-transparent');
      }
    });

  }
}
