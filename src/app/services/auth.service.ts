import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Auth } from '../models/auth.model';
import { User } from '../models/users.model';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/auth';

  constructor(private http: HttpClient) {}

  // login(email: string, password: string) {
  //   return this.http.post<Auth>(`${this.apiUrl}/login`, { email, password });
  // }

  // profile(token: string) {
  //   return this.http.get<User>(`${this.apiUrl}/profile`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       'Content-type': 'application/json',
  //     },
  //   });
  // }

  loginAndGet(email: string, password: string) {
    return this.http
      .post<Auth>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        switchMap((token) =>
          this.http.get<User>(`${this.apiUrl}/profile`, {
            headers: {
              Authorization: `Bearer ${token.access_token}`,
            },
          })
        )
      );
  }
}
