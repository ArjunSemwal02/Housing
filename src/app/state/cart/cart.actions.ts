import { createAction, props } from '@ngrx/store';
import { Product } from '../../model/cart.model';

export const addToCart = createAction('[Cart] Add Item', props<{ product: Product }>());

export const removeFromCart = createAction('[Cart] Remove Item', props<{ productId: number }>());

export const increaseQty = createAction('[Cart] Increase Quantity', props<{ productId: number }>());

export const decreaseQty = createAction('[Cart] Decrease Quantity', props<{ productId: number }>());

export const clearCart = createAction('[Cart] Clear');
