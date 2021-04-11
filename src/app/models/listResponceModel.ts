import { ResponseModel } from "./ResponceModel";

export interface ListResponseModel<T> extends ResponseModel{
    data: T[];
}