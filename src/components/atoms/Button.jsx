import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 30%;
  height: 35px;
  background-color: #73a6ff;
  border-radius: 5px;
  font-size: 18px;
  color: black;
  margin: 5px;
  font-size: 25px;
  border: none;

  &:hover {
    background-color: #b4b4b4;
  }

`;

function Button({text, onclick}) {
  return <ButtonStyled onClick={onclick}>{text}</ButtonStyled>;
}

export default Button;
