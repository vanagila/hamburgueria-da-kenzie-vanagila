import { Button } from "../Button/Button";
import "./styles.css";
import { CartContent } from "../CartContent";

export const Cart = ({
  currentSale,
  setCurrentSale,
  cartTotal,
  setCartTotal,
  removeProduct,
  removeAllProducts,
}) => {
  return (
    <div className="cart">
      <div className="cartHeader">
        <h3>Carrinho de compras</h3>
      </div>
      <div>
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
        <span>R$ {cartTotal}</span>

        <Button
          className="removeAllButton"
          title="Remover todos"
          func={() => removeAllProducts()}
        />
      </div>
    </div>
  );
};
