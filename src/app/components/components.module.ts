import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { FeaturesComponent } from './features/features.component';
import { LearningComponent } from './learning/learning.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NouisliderModule,
    RouterModule,
  ],
  declarations: [
    ComponentsComponent,
    FeaturesComponent,
    LearningComponent,
    CoursesComponent,
    CoursesListComponent,
    UserDetailsComponent,
    SubscribeComponent
  ],
  exports: [ComponentsComponent ]
})
export class ComponentsModule { }
