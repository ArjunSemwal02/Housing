import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth } from '../../../auth/auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  authService = inject(Auth);
  user: string = this.authService.getCurrentUser() || '';

  ngOnInit() {}

  userInitial: string | undefined = this.user.at(0)?.toUpperCase();
}
