import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./components/Product/Product";
import products from "./mocks/products.json";
import Basket from "./components/Basket/Basket";
import ProductModal from "./components/ProductModal/ProductModal";

function App() {
  const [orderedProducts, setOrderedProducts] = useState([]);
  const handleProductSelect = (product) => {
    const newOrderedProducts = [...orderedProducts];
    for (let i = 0; i < product.amount; i++) {
      newOrderedProducts.push(product);
    }
    setOrderedProducts(newOrderedProducts);
  };
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductRemove = (orderedProduct) => {
    setOrderedProducts(
      orderedProducts.filter((product) => product.id !== orderedProduct.id)
    );
  };

  const handleProductDeselect = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Basket
        orderedProducts={orderedProducts}
        onProductRemove={handleProductRemove}
      />

      <ProductModal
        product={selectedProduct}
        onProductSelect={handleProductSelect}
        onProductDeselect={handleProductDeselect}
      />

      <main>
        <header>
          <h1>Welcome!</h1>
        </header>
        <hr />
        <section style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              orderedProducts={orderedProducts}
              onProductSelect={setSelectedProduct}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
