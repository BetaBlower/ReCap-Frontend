import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponceModel';
import { Rental } from 'src/app/models/rental';
import { RentalDetail } from 'src/app/models/rentalDetails';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44363/API/rentals/getall";
  apiUrl2 = "https://localhost:44363/API/rentals/rentaldetails";

  constructor(private HttpClient: HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    return this.HttpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
  
  getRentalDto():Observable<ListResponseModel<RentalDetail>>{
    return this.HttpClient.get<ListResponseModel<RentalDetail>>(this.apiUrl2)
  }
}
