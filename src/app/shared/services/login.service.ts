import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "api/v1/admin/user";

  constructor(private httpService : HttpRequestService) { }

  loginUser(usermodel : any): Observable<Response> {
    return this.httpService.post(this.url + "/login", usermodel);
  }
}
