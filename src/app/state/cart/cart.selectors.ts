import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartItem } from '../../model/cart.model';

export const selectCartState = createFeatureSelector<CartItem[]>('cart');

export const selectCartItems = createSelector(selectCartState, (cart) => cart);

export const selectCartTotalItems = createSelector(selectCartState, (cart) =>
  cart.reduce((total, item) => total + item.quantity, 0)
);

export const selectCartTotalPrice = createSelector(selectCartState, (cart) =>
  cart.reduce((total, item) => total + item.price * item.quantity, 0)
);
