import { Button } from "../Button/Button";
import "./styles.css";

export const CartContent = ({
  sale,
  currentSale,
  setCurrentSale,
  removeProduct,
}) => {
  const { name, category, price, img, id } = sale;
  return (
    <div className="productCardCart">
      <div className="imgCart">
        <img src={img} alt={name}></img>
      </div>
      <div className="infoCart">
        <h4>{name}</h4>
        <p>{category}</p>
      </div>
      <Button
        className="removeButton"
        title="Remover"
        func={() => removeProduct(id)}
      />
    </div>
  );
};
