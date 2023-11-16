import { useForm } from 'react-hook-form';
import { createProduct } from '../services/products.service';

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => await createProduct(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          {...register('name', { required: true })}
        />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          autoComplete="off"
          {...register('price', { required: true, valueAsNumber: true })}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          autoComplete="off"
          {...register('description', { required: true })}
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default ProductForm;
