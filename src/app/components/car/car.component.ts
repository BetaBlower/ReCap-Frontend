import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  dataLoaded = false;

  constructor(private CarService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.CarService.getCars().subscribe(response => {
      this.cars = response.data
      this.dataLoaded=true;
    })

  }
}
