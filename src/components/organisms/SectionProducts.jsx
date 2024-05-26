import ProductCard from "../molecules/ProductCard";
import './SectionProducts.css'

function SectionProducts(props) {
  let currentProduct = props.toShow;

  return (
    <div id="div-div__products">
      <h2>Producto agregado</h2>
      <ProductCard
        woodFinish={currentProduct.getWoodFinish()}
        name={currentProduct.getName()}
        id={currentProduct.getId()}
        stock={currentProduct.getStock()}
        date={currentProduct.getDate()}
      ></ProductCard>
    </div>
  );
}

export default SectionProducts;
