import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth } from '../../auth/auth';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  user!: string;
  constructor(private auth: Auth) {
    this.user = this.auth.getCurrentUser();
  }

  logout() {
    this.auth.logout();
  }
}
