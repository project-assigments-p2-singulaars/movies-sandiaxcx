import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { UserRegister, UserResponse } from '../../shared/interfaces/users';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:3000/users';
  private http = inject(HttpClient)
  private router = inject(Router);
  private localStorageService = inject(LocalStorageService);
  constructor() { }

  register(user: UserRegister) {
    const options = {
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
      },
    }
    
    return this.http.post<UserResponse>(`${this.url}`, user, options).pipe(
      tap((response: any) => {
        console.log('Registration successful:', response);
      }),
      catchError(e => {
        console.error('Registration error:', e);
        return throwError(e);
      })
    );
  }
}
