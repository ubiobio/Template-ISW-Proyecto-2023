import { useForm } from 'react-hook-form';
import { createProduct } from '../services/product.service';
import { useNavigate } from 'react-router-dom';

export default function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useNavigate();
  const mostrarPorConsola = async (data) => {
    const res = await createProduct(data);
    console.log(res);
    router('/products');
  };

  return (
    <form onSubmit={handleSubmit(mostrarPorConsola)}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input autoComplete="off" {...register('name', { required: true })} />
      </div>
      <div>
        <label htmlFor="price">Precio</label>
        <input
          type="number"
          autoComplete="off"
          {...register('price', {
            required: true,
            valueAsNumber: true,
            min: 0,
          })}
        />
      </div>
      <div>
        <label htmlFor="description">Descripción</label>
        <input
          autoComplete="off"
          {...register('description', { required: true })}
        />
      </div>
      {errors.exampleRequired && <span>Este campo es obligario</span>}

      <input type="submit" />
      <button type="button" onClick={() => router('/products')}>
        Cancelar
      </button>
    </form>
  );
}
