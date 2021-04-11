import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { ListResponseModel } from 'src/app/models/listResponceModel';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  apiUrl = "https://localhost:44363/API/";
  
  
  constructor(private httpClient: HttpClient) { }


  getCars():Observable<ListResponseModel<Car>>{
    let newpath = this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newpath);
  }
  getCarsDetail():Observable<ListResponseModel<CarDetail>>{
    let newpath = this.apiUrl + "cars/cardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newpath)
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath= this.apiUrl + "cars/getallbybrandid?brandId=" + brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)

  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath= this.apiUrl + "cars/getallbycolorid?colorId=" + colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)

  }
}
