import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { SidebarService } from '../../global/sidebarService/sidebar-service';
import { Router } from '@angular/router';
import { Auth } from '../../../auth/auth';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  menuItems: string[] = ['Home', 'Housings', 'Registered', 'Log in', 'Sign up', 'Logout'];

  activeItem = 'Home'; // default active

  sidebarOpen = signal<boolean>(false);

  sidebarService = inject(SidebarService);
  authService = inject(Auth);

  constructor(private router: Router) {}

  closeSidebar() {
    this.sidebarService.updateSidebarState(false);
  }

  onClickSidebarOption(event: Event, item: string) {
    this.activeItem = item;
    event.stopPropagation();

    switch (item) {
      case 'Home':
        this.router.navigate(['']);
        break;
      case 'Housings':
        this.router.navigate(['housing']);
        break;
      case 'Registered':
        this.router.navigate(['registered']);
        break;
      case 'Log in':
        this.router.navigate(['login']);
        break;
      case 'Sign up':
        this.router.navigate(['signup']);
        break;
      case 'Logout':
        this.authService.logout();
        break;
    }
  }
}
