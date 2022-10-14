import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/modules/todosSlice";
import Todo from "./Todo";

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const onDeleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  console.log(typeof onDeleteHandler);

  const onEditHandler = (id) => {
    console.log(id);
    dispatch(updateTodo(id));
  };

  return (
    <div>
      <WorkingTitle>Working...</WorkingTitle>
      <ListContainer>
        <CardContainer>
          {todos.map((todo) => {
            if (!todo.isDone) {
              return (
                <Todo
                  key={todo.id}
                  title={todo.title}
                  content={todo.content}
                  Link={`/${todo.id}`}
                  todo={todo}
                  onDeleteHandler={onDeleteHandler}
                  onEditHandler={onEditHandler}
                />
              );
            } else {
              return null;
            }
          })}
        </CardContainer>
      </ListContainer>

      <DoneTitle>Done!!!</DoneTitle>
      <ListContainerse>
        <CardContainerse>
          {todos.map((todo) => {
            if (todo.isDone) {
              return (
                <Todo
                  key={todo.id}
                  title={todo.title}
                  content={todo.content}
                  Link={`/${todo.id}`}
                  todo={todo}
                  onDeleteHandler={onDeleteHandler}
                  onEditHandler={onEditHandler}
                />
              );
            } else {
              return null;
            }
          })}
        </CardContainerse>
      </ListContainerse>
    </div>
  );
};

export default List;

const ListContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 300px;
  max-height: 300px;
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

const ListContainerse = styled.div`
  max-width: 1200px;
  height: 300px;
  width: 100%;

  max-height: 300px;
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

const CardContainer = styled.div`
  /* background-color: lightcyan; */
  max-width: 1200px;
  width: 100%;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  overflow: auto;
  /* padding-left: 30px; */
  justify-content: center;
  gap: 60px;
`;

const CardContainerse = styled.div`
  /* background-color: blue; */
  max-width: 1200px;
  width: 100%;
  min-width: 400px;
  height: 300px;
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: row;
  align-items: center;
  overflow: auto;
  /* padding-left: 30px; */
  justify-content: center;
  gap: 60px;
`;

const WorkingTitle = styled.div`
  font-size: xx-large;
  font-weight: 700;
  padding-left: 40px;
  width: 100%;
  max-width: 1200px;
`;

const DoneTitle = styled.div`
  font-size: xx-large;
  font-weight: 700;
  padding-left: 40px;
`;
