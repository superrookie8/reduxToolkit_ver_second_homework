// 원래 있던 코드
import { createStore } from "redux";
import { combineReducers } from "redux";

// 새롭게 추가한 부분
import todoReducer from "../modules/TodoReducer";

const rootReducer = combineReducers({
  Todos: todoReducer, // <-- 새롭게 추가한 부분 // 이름을 같게 해줘서 사용하지만, 지금은
  //어떤게 들어가는지 봐야하니까 이름을 달리해보았다. todoReducer를 Todos라고 명명하기로 했다는 의미이다.
});
const store = createStore(rootReducer);

export default store;
