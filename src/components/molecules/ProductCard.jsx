import Text from "../atoms/Text";
import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div id="div-div__product">
      <Text text={"Barnizado: " + props.woodFinish}></Text>
      <Text text={"Nombre: " + props.name}></Text>
      <Text text={"Id: " + props.id}></Text>
      <Text text={"Stock: " + props.stock}></Text>
      <Text text={"Fecha de stock: " + props.date}></Text>
    </div>
  );
}

export default ProductCard;
