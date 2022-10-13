//Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DETAIL_TODO = "DETAIL_TODO";

//Action Creator = 무조건 export

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const editTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

export const detailTodo = (payload) => {
  return {
    type: DETAIL_TODO,
    payload,
  };
};

//초기값

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

//리듀서

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      console.log(action.payload);
      return {
        // ...state,
        // ...state.todos.splice(
        //   state.todos.findIndex((todo) => todo.id === action.payload),
        //   1
        // ),
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case UPDATE_TODO:
      console.log(action.payload);
      return {
        ...state,
        todos: state.todos.map((editTodo) => {
          if (editTodo.id === action.payload) {
            console.log("여기로 들어오나");
            return {
              ...editTodo,
              isDone: !editTodo.isDone,
            };
          } else {
            console.log("아니면 여기?");
            return editTodo;
          }
        }),
      };
    case DETAIL_TODO:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };

    default:
      return state;
  }
};

export default todoReducer;
