import { CartItem } from '../model/cart.model';
import { Todo } from '../model/todo.model';

export interface AppState {
  counter: number;
  todos: Todo[];
  cartItems: CartItem[];
}
