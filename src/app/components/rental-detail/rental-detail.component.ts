import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rentalDetails';
import { RentalService } from 'src/app/services/rental/rental.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDtoComponent implements OnInit {

  rentalsDto:RentalDetail[]= [];
  dataLoaded=false;
  constructor(private RentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentalsDto();
  }

  getRentalsDto(){
    this.RentalService.getRentalDto().subscribe(responce=>{
      this.rentalsDto = responce.data;
      this.dataLoaded=true;
    })
  }

}
