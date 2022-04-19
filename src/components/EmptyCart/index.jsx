import "./styles.css";

export const EmptyCart = () => {
  return (
    <div className="emptyCart_content">
      <div className="emptyCart_header">
        <h3>Carrinho de compras</h3>
      </div>
      <div className="emptyCart_main">
        <h3>Sua sacola está vazia</h3>
        <p>Adicione itens</p>
      </div>
    </div>
  );
};
