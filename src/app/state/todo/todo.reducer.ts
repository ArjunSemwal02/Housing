import { createReducer, on } from '@ngrx/store';
import { addTodo, toggleTodo, removeTodo } from './todo.actions';
import { Todo } from '../../model/todo.model';

const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,

  on(addTodo, (state, { title }) => [...state, { id: Date.now(), title, completed: false }]),

  on(toggleTodo, (state, { id }) =>
    state.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  ),

  on(removeTodo, (state, { id }) => state.filter((todo) => todo.id !== id))
);
