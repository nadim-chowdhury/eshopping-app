import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-light border-0">
        <img
          src="https://png2.cleanpng.com/sh/bc423b6b7a0358fc71fb0da1d6daa2f1/L0KzQYm3VsAyN5h9jZH0aYP2gLBuTgNpd6F1gdDwLXPkgsW0gvFoNaFuht02c3jygMHwjvcuapJsRadrMUG0dIm4hsIyP2E4Rqc6OUG2RoSBUcUzP2k5UKU7MUm8QYe1kP5o/kisspng-shopping-cart-bag-pink-shopping-bag-5b111d81f21703.5191363815278483219916.png"
          className="card-img"
          alt="bg-img"
        />
      </div>
      <Products />
    </div>
  );
}
