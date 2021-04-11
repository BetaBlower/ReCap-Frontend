import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDtoComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';

import { ColorComponent } from './components/color/color.component';


const routes: Routes = [
{path:"", pathMatch:"full", component:CarDtoComponent}, 
{path:"cars/detail/car/:carID", component:CarDtoComponent},
{path:"cars/brand/:brandId",component:CarDtoComponent},
{path:"cars/color/:colorId",component:CarDtoComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
