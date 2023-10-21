import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl: string = "https://localhost:7070/api";

  constructor(private http : HttpClient) { }

  singUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}/Profile/register`,userObj);
  }
  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}/Profile/login`,loginObj);
  }

  getAllItems(){
    return this.http.get<any>(`${this.baseUrl}/Item/getAllItems`);
  }

  submitOrder(orderList:any){
    return this.http.post<any>(`${this.baseUrl}/Order/submitOrder`,orderList);
  }
}
