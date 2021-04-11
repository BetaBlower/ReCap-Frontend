import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/color';
import { ListResponseModel } from 'src/app/models/listResponceModel';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl ="https://localhost:44363/API/colors/getall";
  constructor(private HttpClient: HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    return this.HttpClient.get<ListResponseModel<Color>>(this.apiUrl);
  }
}
