import { ADD_TODO, DELETE_TODO } from '../constants';

export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
  id: Math.random()
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
});
