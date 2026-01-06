import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from '../../model/todo.model';

export const selectTodoState = createFeatureSelector<Todo[]>('todos');

export const selectTodos = createSelector(selectTodoState, (state) => state);

export const selectCompletedTodos = createSelector(selectTodoState, (todos) =>
  todos.filter((t) => t.completed)
);
