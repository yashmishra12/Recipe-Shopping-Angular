import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

export interface AuthResponseData {
  idToken:	string;
  email:	string;
  refreshToken:	string;
  expiresIn:	string;
  localId:	string;
  registered? : boolean;
}

@Injectable({providedIn: 'root'})

export class AuthService{
  apiEndPoint: string = '';
  signInEndPoint: string = '';

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.apiEndPoint;
    this.signInEndPoint = environment.signInEndPoint;
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.apiEndPoint,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(catchError(errorRes => {
        let errorMessage = 'An unknown error occurred';
        if(!errorRes.error || !errorRes.error.error) {
          return throwError(errorMessage);
        }
        switch(errorRes.error.error.message) {
          case 'EMAIL_EXISTS' :
            errorMessage = 'This E-Mail already exists';
      }
        return throwError(errorMessage);
    }));
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.signInEndPoint, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  };
}
