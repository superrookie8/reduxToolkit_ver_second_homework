import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      title: "리액트 다지기",
      content: "useSelector란 무엇인가",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 뿌시기",
      content: "리덕스 어디까지 써봤니?",
      isDone: false,
    },
  ],
  todo: {
    id: "0",
    title: "",
    body: "",
    isDone: false,
  },
};

const todosSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      });
    },
    detailTodo: (state, action) => {
      state.todo = state.todos.find((todo) => {
        return todo.id == action.payload;
      });
    },
  },
});
export const { addTodo, deleteTodo, updateTodo, detailTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
