import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth } from '../../auth/auth';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  user!: string;
  counter$!: Observable<any>;

  name: string = 'arjun';

  constructor(private auth: Auth, private store: Store<AppState>) {
    this.user = this.auth.getCurrentUser();
    this.counter$ = this.store.select((state) => state.counter);
  }

  logout() {
    this.auth.logout();
  }

  updateName() {
    this.name = 'kdsfj';
  }
}
