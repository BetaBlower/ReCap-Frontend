import { ResponseModel } from "./ResponceModel";
import { Rental } from "./rental";


export interface RentalResponceModel extends ResponseModel{
    data:Rental[]
}