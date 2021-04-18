import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userSubject: BehaviorSubject<any>;

  constructor() {
    this.userSubject = new BehaviorSubject(null);
    const user = JSON.parse(localStorage.getItem('user')) || null;
    const token = localStorage.getItem('jwt');
    if (token && user) {
      const helper = new JwtHelperService();
      // const decodedToken = helper.decodeToken(token);
      const isExpired = helper.isTokenExpired(token);
      if (!isExpired) {
        localStorage.setItem('jwt', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
      }
    }
  }


  byToken(token: string): boolean {
    //
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    const isExpired = helper.isTokenExpired(token);
    if (!isExpired) {
      localStorage.setItem('jwt', token);
      localStorage.setItem('user', JSON.stringify(decodedToken.user));
      this.userSubject.next(decodedToken.user);
      return true;
    } else {
      return false;
    }
  }

  clean(): void {
    localStorage.setItem('jwt', null);
    localStorage.setItem('user', null);
    this.userSubject.next(null);
  }

  getUser(): Observable<any> {
    return this.userSubject;
  }

  // setUser(user: any) {
  //   localStorage.setItem('user', JSON.stringify(user));
  //   this.userSubject.next(user);
  // }
}
