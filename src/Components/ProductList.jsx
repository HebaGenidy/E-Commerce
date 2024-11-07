import React, { useEffect, useState } from 'react';
import Product from './Product';
import './product.css';

export default function ProductList() { 

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setProducts(data));
  }, []); 

  const productData = products.map((p) => {
    return (
      <Product key={p.id} product={p} /> 
    );
  });

  return (
    <div className="cls-product">
      <div className='cls-row'>
        {productData}
      </div>
    </div>
  );
}
