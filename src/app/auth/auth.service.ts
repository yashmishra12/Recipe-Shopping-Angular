import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface AuthResponseData {
  idToken:	string;
  email:	string;
  refreshToken:	string;
  expiresIn:	string;
  localId:	string;
}

@Injectable({providedIn: 'root'})

export class AuthService{

  constructor(private http: HttpClient) {}

  apiEndPoint: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCSTVpseOa7NaAfqw1yJxMGUaNztUPIyig';

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.apiEndPoint,
      {
        email: email,
        password: password,
        returnSecureToken: true

      });
  }
}
