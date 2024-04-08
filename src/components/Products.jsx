import React from "react";

import { products } from "../assets/products";

const Products = () => {
  return (
    <div className="container mx-auto">
      <h2 className="fs-1 text-success pb-2 text-center fw-semibold  py-5 text-uppercase  mb-4">
        Our Products
      </h2>
      <div id="ourProducts">
        {products.map((product, index) => {
          return (
            <div key={index} className="gridItems">
              {product.image && (
                <img src={product.image} className="productImage" />
              )}
              <div>{product.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
