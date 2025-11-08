import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private usersKey = 'users';
  private authKey = 'authUser';

  constructor(private router: Router) {}

  signup(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem(this.usersKey) || '[]');
    if (users.find((u: any) => u.email === email)) {
      return false; // user already exists
    }
    users.push({ email, password });
    localStorage.setItem(this.usersKey, JSON.stringify(users));
    return true;
  }

  login(email: string, password: string, rememberMe: boolean): boolean {
    const users = JSON.parse(localStorage.getItem(this.usersKey) || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (user) {
      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem(this.authKey, JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.authKey);
    sessionStorage.removeItem(this.authKey);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!(localStorage.getItem(this.authKey) || sessionStorage.getItem(this.authKey));
  }

  getCurrentUser(): any {
    return JSON.parse(
      localStorage.getItem(this.authKey) || sessionStorage.getItem(this.authKey) || 'null'
    );
  }
}
