// src/components/Products.js
import React from "react";
import ProductCard from "../../common/ProductCard";
import ProductCardShimmer from "../../common/ProductCardShimmer";

const Products = ({ products, loading }) => {
    return (
        <div className="lg:ml-[27%] ml-[32%]">
            <div className="product-container flex flex-wrap justify-evenly">
                {loading
                    ? Array(8)
                          .fill()
                          .map((_, idx) => <ProductCardShimmer key={idx} />)
                    : products.map((product) => (
                          <div className="p-2" key={product.productId}>
                              <ProductCard product={product} />
                          </div>
                      ))}
            </div>
        </div>
    );
};

export default Products;
