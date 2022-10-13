import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <HeaderStyle>
        <TitleStyle>My Todo List</TitleStyle>
        <SubTitleStyle> React</SubTitleStyle>
      </HeaderStyle>
    </div>
  );
};

export default Header;

const HeaderStyle = styled.div`
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  height: 50px;
  background-color: lightpink;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const TitleStyle = styled.div`
  /* background-color: red; */
`;

const SubTitleStyle = styled.div`
  /* background-color: blue; */
`;
