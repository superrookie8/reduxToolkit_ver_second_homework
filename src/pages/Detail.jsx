import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { detailTodo } from "../redux/modules/TodoReducer";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const PageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  height: 800px;
  background-color: lightcoral;
  display: flex;
  flex-direction: column;
`;

const HeadContainer = styled.div`
  width: 800px;
  height: 50px;
  background-color: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 80%;
`;

const TextBox = styled.div`
  width: 500px;
  height: 400px;
  border: 3px dotted gray;
  border-radius: 20px;
  margin: auto;
`;
const TitleStyled = styled.div`
  font-size: xx-large;
  /* background-color: wheat; */
  display: flex;
  padding-left: 30px;
  padding-top: 30px;
`;

const ContentStyled = styled.div`
  font-size: large;
  /* background-color: lightseagreen; */
  display: flex;
  padding-left: 30px;
  padding-top: 30px;
`;

const GetIdStyle = styled.div`
  margin-left: auto;
`;

const BeforeButton = styled.div`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: none;
  background-color: salmon;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: "happyDobby";
  font-weight: 700;
  font-size: x-large;
  margin-right: auto;
`;

// const StyledLink = styled(Link)`
//   text-decoration: none !important;
//   text-decoration-line: none !important;
//   color: wheat;
// `;

const Detail = () => {
  const todo = useSelector((state) => state.Todos.todo);
  console.log(todo.id);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log({ id });

  useEffect(() => {
    dispatch(detailTodo(id));
  }, [dispatch, id]); // 이부분이 왜 이렇게 되는 건가..
  // dispatch는 써줘야하고, 빈배열일때는 값을 찾기도 전에 한번만 실행 될수 있기 때문에
  //id값을 정확히 지정해서 찾을 때까지 실행해달라고 해야한다.

  return (
    <div>
      <PageContainer>
        <HeadContainer>
          <GetIdStyle>id:{todo.id}</GetIdStyle>
          <BeforeButton
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </BeforeButton>
        </HeadContainer>
        <TextBox>
          <TitleStyled>{todo.title}</TitleStyled>
          <ContentStyled>{todo.content}</ContentStyled>
        </TextBox>
      </PageContainer>
    </div>
  );
};

export default Detail;
