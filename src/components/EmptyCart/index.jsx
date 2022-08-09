import "./styles.css";

export const EmptyCart = () => {
  return (
    <div className="wrapper">
      <h3>Carrinho de compras</h3>
      <div className="content">
        <p>Sua sacola está vazia</p>
        <span>Adicione itens</span>
      </div>
    </div>
  );
};
