import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent,
    MealDetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule
  ]
})
export class PagesModule { }
