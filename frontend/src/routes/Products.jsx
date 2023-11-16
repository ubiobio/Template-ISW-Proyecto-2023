import ProductForm from '../components/ProductForm';
import { getProducts } from '../services/products.service';
import { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(products);

  return (
    <>
      <h1>Productos</h1>
      <ProductForm />
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Products;
