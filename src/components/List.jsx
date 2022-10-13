import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo } from "../redux/modules/TodoReducer";
import Todo from "./Todo";
import { Link } from "react-router-dom";

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

const ListContainer_se = styled.div`
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

const CardContainer_se = styled.div`
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

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.Todos.todos);
  console.log({ todos });

  const onDeleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  console.log(typeof onDeleteHandler);

  const onEditHandler = (id) => {
    console.log(id);
    dispatch(editTodo(id));
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
      <ListContainer_se>
        <CardContainer_se>
          {todos.map((todo) => {
            if (todo.isDone) {
              return (
                <Todo
                  key={todo.id}
                  title={todo.title}
                  content={todo.content}
                  todo={todo}
                  onDeleteHandler={onDeleteHandler}
                  onEditHandler={onEditHandler}
                />
              );
            } else {
              return null;
            }
          })}
        </CardContainer_se>
      </ListContainer_se>
    </div>
  );
};

export default List;
