import styled from "styled-components";

const LabelStyled = styled.label`
  color: black;
  font-size: 20px;
  margin: 5px;
`;

function Label(props) {
  return <LabelStyled>{props.text}</LabelStyled>;
}

export default Label;
