import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { AppConfigService } from '../services/app-config.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  [x: string]: any;

  configs = new AppConfigService();

  httpUrlEncodedOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  httpMultipartFormData = {
    headers: new HttpHeaders() // content-type header will be set automatically by req
  };

  httpJsonOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  
  constructor(private http: HttpClient) { }

  post(url: string, body, isLogin?: boolean): Observable<any> {
    return isLogin ? this.http.post<any>(url, body.toString(), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
      observe: 'response'
    }) : this.http.post(environment.apiUrl + url, body, this.httpJsonOptions);
  }

  get(url: string): Observable<any> {
    return this.http.get(environment.apiUrl + url, this.httpJsonOptions);
  }

  put(url: string, body): Observable<any> {
    return this.http.put(environment.apiUrl + url, body, this.httpJsonOptions);
  }

  filePost(url: string, formData: FormData): Observable<any> { // form data as well as file post
    return this.http.post(environment.apiUrl + url, formData,this.httpMultipartFormData);
  }

  filePut(url: string, formData: FormData): Observable<any> { // form data as well as file put
    return this.http.put(environment.apiUrl + url, formData, this.httpMultipartFormData);
  }
  delete(url: string): Observable<any> {
    return this.http.delete(environment.apiUrl +url,this.httpJsonOptions);
  }
  // fileDownload(url: string,body): Observable<any> {
  //   return this.http.post(environment.apiUrl + url, body, { responseType: 'blob' });
  // }
}
