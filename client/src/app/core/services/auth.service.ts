import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { UserLogin, UserRegister, UserResponse } from '../../shared/interfaces/users';
import { catchError, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:3000/users';
  private http = inject(HttpClient)
  private router = inject(Router);
  private localStorageService = inject(LocalStorageService);

  isLogged = signal<boolean>(false);


  constructor() {
    if(this.localStorageService.getToken()){
      this.isLogged.set(true);
    } else {
      this.isLogged.set(false);
    }
  }

  login(user:UserLogin){
    const options = {
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
      },
    }

    return this.http.post<UserLogin>(`${this.url}`, user, options).pipe(
      tap((response: any) => {
        if (this.localStorageService.getToken()) {
          this.isLogged.set(true);
        }
      }),
      catchError(e=>of(e)))
  }

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

  logout (){
    this.localStorageService.removeToken();
    this.isLogged.set(false);
    this.router.navigate(['/login'])
  }

}
