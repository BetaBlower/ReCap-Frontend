import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { ListResponseModel } from 'src/app/models/listResponceModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44363/API/Customer/getall"
  constructor(private HttpClient: HttpClient) { }
  getCustomers():Observable<ListResponseModel<Customer>>{
    return this.HttpClient.get<ListResponseModel<Customer>>(this.apiUrl);
  }

}
