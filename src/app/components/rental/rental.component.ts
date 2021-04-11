import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalDetail } from 'src/app/models/rentalDetails';
import { RentalService } from 'src/app/services/rental/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:Rental[] = [];
  dataLoaded = false;
  
  constructor(private RentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentals();
  }
  getRentals(){
    this.RentalService.getRentals().subscribe(Response => {
      this.rentals = Response.data
      this.dataLoaded=true;
    })
  }

}
