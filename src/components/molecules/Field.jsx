import Input from "../atoms/Input";
import Label from "../atoms/Label";
import "./Field.css";

function Field(props) {
  return (
    <div id="div-div__field">
      <Label text={props.text}></Label>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        val={props.val}
        fnVal={props.fnVal}
      ></Input>
    </div>
  );
}

export default Field;
