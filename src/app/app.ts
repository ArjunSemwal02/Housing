import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/layouts/navbar/navbar';
import { Footer } from './shared/layouts/footer/footer';
import { Sidebar } from './shared/layouts/sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { SidebarService } from './shared/global/sidebarService/sidebar-service';
import { ClickOutside } from './directives/click-outside/click-outside';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Sidebar, CommonModule, ClickOutside],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('housing');

  sidebarService = inject(SidebarService);

  sidebarOpen: boolean = true;

  @Input() userIcon!: HTMLElement;

  ngOnInit() {
    setTimeout(() =>
      this.sidebarService.sidebarOpen$.subscribe((value: boolean) => {
        this.sidebarOpen = value;
      })
    );
  }
}
