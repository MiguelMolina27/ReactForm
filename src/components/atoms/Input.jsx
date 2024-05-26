import styled from "styled-components";

const InputStyled = styled.input`
  width: 100%;
  height: 40px;
  border: 1px red solid;
  border-radius: 3px;
  color: #863a00;
  font-size: 20px;
`;

function Input(props) {
  const handlerOnChange = (event) => {
    if(props.type == "checkbox"){
      props.fnVal(event.target.checked)
    } else if(props.type == "radio"){
      props.fnVal(event.target.checked)
    }else{

      props.fnVal(event.target.value);
    }
  };

  return (
    <InputStyled
      type={props.type}
      placeholder={props.placeholder}
      value={props.val}
      onChange={handlerOnChange}
    ></InputStyled>
  );
}

export default Input;
