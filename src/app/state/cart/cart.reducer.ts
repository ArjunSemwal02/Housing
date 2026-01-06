import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } from './cart.actions';
import { CartItem } from '../../model/cart.model';

const initialState: CartItem[] = [];

export const cartReducer = createReducer(
  initialState,

  on(addToCart, (state, { product }) => {
    const existingItem = state.find((item) => item.id === product.id);

    if (existingItem) {
      return state.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }

    return [...state, { ...product, quantity: 1 }];
  }),

  on(increaseQty, (state, { productId }) =>
    state.map((item) => (item.id === productId ? { ...item, quantity: item.quantity + 1 } : item))
  ),

  on(decreaseQty, (state, { productId }) =>
    state
      .map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
      .filter((item) => item.quantity > 0)
  ),

  on(removeFromCart, (state, { productId }) => state.filter((item) => item.id !== productId)),

  on(clearCart, () => [])
);
