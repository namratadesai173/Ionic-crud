import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url="api/v1/admin/products";

  constructor(private httpservice: HttpRequestService) { }

  saveProduct(product: any): Observable<Response> {
    return this.httpservice.post(this.url,product);
  }
  
  getAllProduct(body : any): Observable<Response> {
    return this.httpservice.post(this.url+'/list', body);
  }

  updateProduct(product: any): Observable<Response> {
    return this.httpservice.put(this.url,product);
  }

  deleteProduct(id: any): Observable<Response> {
    return this.httpservice.delete(this.url+"/"+id);
  }

  findProductByDate(body : any): Observable<Response> {
    return this.httpservice.post(this.url+'/date', body);
  }
}
