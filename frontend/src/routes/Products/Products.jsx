import { Link } from 'react-router-dom';
import { getProducts } from '../../services/product.service';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
    console.log(products);
  }, []);

  return (
    <>
      <h1>Products</h1>
      <Link to="/products/create">Create Product</Link>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <Link to={`/products/${product._id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
