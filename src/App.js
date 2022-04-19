import "./index.css";

import { useState } from "react";
import { Header } from "./components/Header";
import { MenuContainer } from "./components/MenuContainer";
import { Cart } from "./components/Cart";
import { EmptyCart } from "./components/EmptyCart";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca-Cola",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Milkshake Ovomaltine",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [inputProduct, setInputProduct] = useState([]);

  const showProducts = (inputProduct) => {
    const newProductList = products.filter(
      (product) =>
        product.name.toLocaleLowerCase() === inputProduct.toLocaleLowerCase() ||
        product.category.toLocaleLowerCase() ===
          inputProduct.toLocaleLowerCase()
    );
    setFilteredProducts(newProductList);
  };

  const handleClick = (productId) => {
    const item = filteredProducts.find((product) => product.id === productId);
    const prod = currentSale.find((product) => product.id === productId);
    if (prod === undefined) {
      setCurrentSale([...currentSale, item]);
    }
    setCartTotal(cartTotal + item.price);
  };

  const removeProduct = (productId) => {
    const item = filteredProducts.find((product) => product.id === productId);
    const newCartList = currentSale.filter(
      (product) => product.id !== productId
    );

    setCurrentSale(newCartList);
    setCartTotal(cartTotal - item.price);
  };

  const removeAllProducts = () => {
    setCurrentSale([]);
    setCartTotal(0);
  };

  return (
    <div className="App">
      <header>
        <Header
          inputProduct={inputProduct}
          setInputProduct={setInputProduct}
          showProducts={showProducts}
        />
      </header>

      <div className="container">
        <MenuContainer products={filteredProducts} handleClick={handleClick} />
        {cartTotal === 0 ? (
          <EmptyCart />
        ) : (
          <Cart
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
            removeProduct={removeProduct}
            removeAllProducts={removeAllProducts}
          />
        )}
      </div>
    </div>
  );
}

export default App;
