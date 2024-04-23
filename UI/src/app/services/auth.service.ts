import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private userRole = new BehaviorSubject<string>('');

  constructor() { }

  setUserRole(role: string) {
    this.userRole.next(role);
  }

  getUserRole(): Observable<string> {
    return this.userRole.asObservable();
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.setUserRole('admin');
      return true;
    } else {
      return false;
    }
  }
  
}