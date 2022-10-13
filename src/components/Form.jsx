import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/TodoReducer";
import nextId from "react-id-generator";
// import uuid from "react-uuid";

const FormContainer = styled.form`
  background-color: beige;
  font-style: happyDobby;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: row; */
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const TitleBox = styled.div`
  /* background-color: red; */
  width: 400px;
  min-width: 320px;
  display: flex;
`;
const TitleStyle = styled.div`
  width: 40px;
`;

const ContentBox = styled.div`
  width: 400px;
  min-width: 320px;
  display: flex;
`;
const ContentStyle = styled.div`
  width: 40px;
`;

const InputStyle = styled.input`
  max-width: 300px;
  width: 100%;
  display: flex;
  height: 30px;
  border-radius: 20px;
  border: 2px solid salmon;
  margin-left: 10px;
  font-style: "happyDobby";
`;

const ButtonStyle = styled.button`
  max-width: 120px;
  width: 100%;
  height: 30px;
  border: none;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: bisque;
  font-style: "happyDobby";
`;

const Form = () => {
  const id = nextId();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    id: 0,
    title: "",
    content: "",
    idDone: false,
  });

  const { title, content } = inputs;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (inputs.title.length === 0 || inputs.content.length === 0) {
      alert("내용을 넣어주세요");
      return;
    }

    dispatch(
      addTodo({
        ...inputs,
        id,
      })
    );
    setInputs("");
  };

  console.log(inputs);
  return (
    <FormContainer onSubmit={onSubmitHandler}>
      <TitleBox>
        <TitleStyle>제목</TitleStyle>
        <InputStyle
          type="text"
          name="title"
          value={inputs.title || ""}
          onChange={onChangeHandler}
        ></InputStyle>
      </TitleBox>
      <ContentBox>
        <ContentStyle>내용</ContentStyle>
        <InputStyle
          type="text"
          name="content"
          value={inputs.content || ""}
          onChange={onChangeHandler}
        ></InputStyle>
      </ContentBox>
      <div>
        <ButtonStyle>추가하기</ButtonStyle>
      </div>
    </FormContainer>
  );
};

export default Form;
