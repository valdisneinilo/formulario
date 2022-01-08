import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Cadastro</h1>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  h1 {
    font-size: 2.5rem;
    font-family: Georgia, "Times New Roman", Times, serif;

    &::after {
      content: "";
      display: block;
      width: 25px;
      height: 15px;
      background-color: red;
      margin-top: -20px;
    }
  }
`;

export default Header;
