import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'meal-details',
    component:MealDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
