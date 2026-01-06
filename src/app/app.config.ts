import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './state/counter/counter.reducers';
import { todoReducer } from './state/todo/todo.reducer';
import { cartReducer } from './state/cart/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideStore({
      counter: counterReducer,
      todos: todoReducer,
      cart: cartReducer,
    }),
  ],
};
