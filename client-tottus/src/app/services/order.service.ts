import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get<any>(`${environment.api}/order/list`);
  }

  register(productId: number, quantity: number): Observable<any> {
    return this.http.post<any>(
      `${environment.api}/order/register`, {productId, quantity});
  }

  assign(orderId: number, assignedTo: number): Observable<any>  {
    return this.http.put<any>(
      `${environment.api}/order/change-state`, {orderId, assignedTo});
  }
}
