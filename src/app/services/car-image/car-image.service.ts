import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from 'src/app/models/carImage';
import { ListResponseModel } from 'src/app/models/listResponceModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = "https://localhost:44363/api/"
  constructor(private httpClient:HttpClient) { }

  getCarImagesByCar(carID:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl+carID;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
