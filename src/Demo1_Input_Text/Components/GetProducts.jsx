import React, { useState, useEffect } from "react";

const GetProducts = ({ category }) => {
  const [products, setProducts] = useState([]);

  const disconnectFromServer = () => {
    console.log("Disconnected from server...");
  };

  useEffect(() => {
    console.log(`Fetching products in ${category}`);
    setProducts(["Keyboard", "Mouse"]);

    return () => disconnectFromServer();
  }, []);

  return (
    <>
      <div>Display products from category {category}</div>
      <ol>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ol>
    </>
  );
};

export default GetProducts;
