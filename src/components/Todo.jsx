import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Todo = ({ todo, onDeleteHandler, onEditHandler }) => {
  // const todos = useSelector((state) => state.Todos.todos);

  console.log(todo);
  return (
    <CardBox>
      <HeadContainer key={todo.id}>
        <DetailButton>
          <StLink to={`/detail/${todo.id}`} key={todo.id}>
            <div>상세보기</div>
          </StLink>
        </DetailButton>
      </HeadContainer>
      <TitleStyle>{todo.title}</TitleStyle>
      <ContentBox>
        <ContentStyle>{todo.content}</ContentStyle>
      </ContentBox>
      <ButtonContainer>
        <DeleteButton onClick={() => onDeleteHandler(todo.id)}>
          삭제
        </DeleteButton>
        <CompleteButton onClick={() => onEditHandler(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </CompleteButton>
      </ButtonContainer>
    </CardBox>
  );
};

export default Todo;

const HeadContainer = styled.div`
  /* background-color: azure; */
  width: 250px;
  height: 30px;
  display: flex;
  flex-direction: row;
`;

const CardBox = styled.div`
  width: 250px;
  height: 200px;
  border: 2px solid salmon;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DetailButton = styled.div`
  width: 70px;
  height: 30px;
  /* font-style: happyDobby; */
  font-size: large;
  border-radius: 10px;
  border: none;
  background-color: lightcoral;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StLink = styled(Link)`
  text-decoration: none;
`;

const TitleStyle = styled.div`
  font-size: x-large;
  font-weight: 900;
  /* background-color: aliceblue; */
  width: 250px;
  height: 40px;
`;
const ContentBox = styled.div`
  /* background-color: aquamarine; */
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;
  width: 250px;
  height: 40px;
  overflow: auto;
`;
const ContentStyle = styled.div`
  /* background-color: pink; */
  font-size: x-large;
  font-weight: 400;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;

const DeleteButton = styled.div`
  width: 100px;
  border: 2px solid red;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

const CompleteButton = styled.div`
  width: 100px;
  border: 2px solid blue;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;
