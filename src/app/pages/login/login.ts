import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../auth/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../state/app.state';
import { decrement, increment, reset } from '../../state/counter/counter.actions';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm!: FormGroup;
  submitted = false;
  error = '';

  counter$!: Observable<number>;

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.counter$ = this.store.select((state) => state.counter);
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });

    if (this.auth.isLoggedIn()) {
      this.router.navigate(['']); // auto redirect if already logged in
    }
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) return;

    if (this.auth.login(this.email?.value, this.password?.value, this.rememberMe?.value)) {
      this.router.navigate(['']);
      console.log('Form Submitted ✅', this.loginForm.value);
    } else {
      this.error = 'Invalid email or password';
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get rememberMe() {
    return this.loginForm.get('rememberMe');
  }

  // state

  inc() {
    this.store.dispatch(increment());
  }
  dec() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
