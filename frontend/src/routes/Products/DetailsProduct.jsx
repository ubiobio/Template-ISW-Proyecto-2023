import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/product.service';

const DetailsProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(id).then((response) => {
      setProduct(response);
    });
  }, []);

  return (
    <>
      <br />
      <h2>Detalles del producto: </h2>
      <div>
        <p>Nombre: {product.name}</p>
        <p>Precio: {product.price}</p>
        <p>Descripción: {product.description}</p>
      </div>
    </>
  );
};

export default DetailsProduct;
