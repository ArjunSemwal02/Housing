import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth } from '../../../auth/auth';
import { SidebarService } from '../../global/sidebarService/sidebar-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  authService = inject(Auth);
  sidebarService = inject(SidebarService);

  user: string = this.authService.getCurrentUser() || '';

  @ViewChild('userIcon') userIcon!: ElementRef;

  userInitial: string | undefined = this.user[0]?.toUpperCase();

  openUserDetails() {}
}
