import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

interface AuthResponseData {
  idToken:	string;
  email:	string;
  refreshToken:	string;
  expiresIn:	string;
  localId:	string;
}

@Injectable({providedIn: 'root'})

export class AuthService{
  apiEndPoint: string = '';

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.apiEndPoint;
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.apiEndPoint,
      {
        email: email,
        password: password,
        returnSecureToken: true
      });
  }
}
