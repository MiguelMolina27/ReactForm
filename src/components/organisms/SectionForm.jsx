import { useState } from "react";
import Swal from "sweetalert2";
import Field from "../molecules/Field";
import Button from "../atoms/Button";

import "./SectionForm.css";
import { lista, createProducto } from "../../util/dependencies";

function SectionLogin(props) {
  const [woodFinish, setWoodFinish] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [stock, setStock] = useState("");
  const [count, setCount] = useState(0);

  let isShowed = false;

  const handlerClick = (event) => {
    Swal.fire({
      title: "Datos guardados",
      text: `${woodFinish} : ${name} : ${id} : ${date} : ${stock}`,
    });
    const nuevoProducto = createProducto(woodFinish, name, id, stock, date);
    lista.push(nuevoProducto);
    
  };

  const handlerClickShow = (event) => {
    console.log(count)
    props.show(lista.getElementAt(count).getData());
  
    if(count < lista.size()-1){
      setCount(count + 1);
    }else{
      setCount(0)
    }
    
    isShowed = true;
  };

  return (
    <div id="div-div__sectionLogin">
      <h1>Datos del producto</h1>
      <Field
        type="checkbox"
        placeholder=" "
        text="Barnizado"
        val={woodFinish}
        fnVal={setWoodFinish}
      ></Field>
      <Field
        type="text"
        placeholder=""
        text="Nombre"
        val={name}
        fnVal={setName}
      ></Field>
      <Field
        type="text"
        placeholder=""
        text="ID"
        val={id}
        fnVal={setId}
      ></Field>
      <Field
        type="number"
        placeholder=""
        text="Cantidad"
        val={stock}
        fnVal={setStock}
      ></Field>
      <Field
        type="date"
        placeholder=" "
        text="Fecha de elaboración"
        val={date}
        fnVal={setDate}
      ></Field>

      <Button text="Enviar" onclick={handlerClick}></Button>
      <Button text="Mostrar datos" onclick={handlerClickShow}></Button>
    </div>
  );
}

export default SectionLogin;
