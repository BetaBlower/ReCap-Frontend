import { Component, OnInit } from '@angular/core';
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
  carde:string[]=["bla bla","bla bla","asdasd","dsadasd","asdasd"];
  dataLoaded=false;

  constructor(private CarService:CarService) { }

  ngOnInit(): void {
    this.getCarsDetail();
  }

  getCarsDetail(){
    this.CarService.getCarsDetail().subscribe(response=>{
      this.carDetails = response.data
      this.dataLoaded=true;
    })


  }

}
