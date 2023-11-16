import axios from './root.service';

export async function getProducts() {
  try {
    const response = await axios.get('/products');

    if (response.status === 200) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.log(error);
  }
}

export async function createProduct(product) {
  try {
    const response = await axios.post('/products', product);

    if (response.status === 201) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.log(error);
  }
}
