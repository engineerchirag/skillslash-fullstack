import { useEffect, useState } from "react";
import Product from "./Product";
import ProductFilter from "./ProductFilter";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filterProducts = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ProductFilter filterProducts={filterProducts} />
      <div>
        {products.map((item) => (
          <Product
            key={item.id}
            detail={item}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
