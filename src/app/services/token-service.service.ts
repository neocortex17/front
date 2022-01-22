import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  signOut(): void {
    localStorage.clear();
  }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public  getToken(): string {
    return localStorage.getItem(TOKEN_KEY) as string;
  }

  public saveUser(user: any): void {
    localStorage.removeItem(user);
    localStorage.setItem('user', user);
  }

  public getUser(): string {
    return String(localStorage.getItem('user'));
  }
}
