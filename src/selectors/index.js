import { createSelector } from "reselect";

const selectTodos = (state) => state.todos.items;
export const selectLoadingTodos = (state) => state.todos.loading;

export const getAllTodos = createSelector([selectTodos], (todos) => [...todos]);

// эти два силектора просто для примера
export const getCompletedTodos = createSelector([selectTodos], (todos) =>
  todos.filter((todo) => todo.completed)
);

export const getIncompleteTodos = createSelector([selectTodos], (todos) =>
  todos.filter((todo) => !todo.completed)
);
