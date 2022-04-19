import { Product } from "../Product";
import "./styles.css";

export const MenuContainer = ({ products, handleClick }) => {
  return (
    <div className="mainMenu">
      {products.map((product, id) => {
        return <Product key={id} product={product} handleClick={handleClick} />;
      })}
    </div>
  );
};
