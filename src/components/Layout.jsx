import React from "react";
import styled from "styled-components";

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  width: 100%;
  min-width: 400px;
  height: 800px;
  background-color: aquamarine;
`;

const Layout = (props) => {
  return (
    <div>
      <LayoutStyle>{props.children}</LayoutStyle>
    </div>
  );
};

export default Layout;
