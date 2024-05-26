import SectionForm from "../components/organisms/SectionForm";
import SectionProducts from "../components/organisms/SectionProducts";
import "./Home.css";
import { useState } from "react";

function Home() {
  const [show, setShow] = useState(undefined);

  let someToShow;

  if (show == undefined) {
    someToShow = <p>Nada por mostrar</p>;
  } else {
    someToShow = <SectionProducts toShow={show}></SectionProducts>;
  }

  return (
    <div id="div-div__home">
      <SectionForm show={setShow}></SectionForm>
      {someToShow}
      
    </div>
  );
}
export default Home;
