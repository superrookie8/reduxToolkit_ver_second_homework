import React from "react";
import "../App.css";
import styled from "styled-components";
import Form from "../components/Form";
import List from "../components/List";
import Layout from "../components/Layout";
import Header from "../components/Header";

const FontStyle = styled.div`
  font-family: "happyDobby";
  font-size: xx-large;
`;

const TodoList = () => {
  return (
    <FontStyle>
      <Layout>
        <Header />
        <Form />
        <List />
      </Layout>
    </FontStyle>
  );
};

export default TodoList;
