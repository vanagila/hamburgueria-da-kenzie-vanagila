import { Button } from "../Button/Button";
import "./styles.css";
import { CartContent } from "../CartContent";

export const Cart = ({
  currentSale,
  setCurrentSale,
  removeProduct,
  removeAllProducts,
  totalPrice,
}) => {
  return (
    <div className="cartContainer">
      <h3>Carrinho de compras</h3>
      <div className="cart">
        {currentSale.map((sale, id) => {
          return (
            <CartContent
              key={id}
              sale={sale}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
              removeProduct={removeProduct}
            />
          );
        })}
      </div>
      <div className="cartFooter">
        <p>Total</p>
        <span>R$ {totalPrice}</span>

        <Button
          className="removeAllButton"
          title="Remover todos"
          func={() => removeAllProducts()}
        />
      </div>
    </div>
  );
};
