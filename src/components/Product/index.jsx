import { Button } from "../Button/Button";
import "./styles.css";

export const Product = ({ product, handleClick }) => {
  const { id, name, category, price, img } = product;

  return (
    <div className="productCard">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="productCardMain">
        <h3>{name}</h3>
        <p>{category}</p>
        <span>R$ {price}</span>

        <Button
          className="addButton"
          func={() => handleClick(id)}
          title="Adicionar"
        />
      </div>
    </div>
  );
};
