import axios from './root.service';

export const getProducts = async () => {
  try {
    const response = await axios.get('/products');
    if (response.status === 200) {
      return response.data.data;
    }
    return [];
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (product) => {
  try {
    const response = await axios.post('/products', product);
    if (response.status === 201) {
      return response.data;
    }
    return {};
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios.get(`/products/${id}`);
    if (response.status === 200) {
      return response.data.data;
    }
    return {};
  } catch (error) {
    console.log(error);
  }
};
