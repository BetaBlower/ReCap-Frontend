import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDtoComponent implements OnInit {

  carDetails:CarDetail[] = [];
  dataLoaded=false;

  constructor(private CarService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCarsDetail();
  }

  getCarsDetail(){
    this.CarService.getCarsDetail().subscribe(response=>{
      this.carDetails = response.data
      this.dataLoaded=true;
    })
  }
  getCarsByBrand(brandId:number){
    this.CarService.getCarsByBrand(brandId).subscribe(response=>{
      this.carDetails = response.data
      this.dataLoaded=true;})
  }
  getCarsByColor(colorId:number){
    this.CarService.getCarsByColor(colorId).subscribe(response=>{
      this.carDetails = response.data
      this.dataLoaded=true;})
  }

}
