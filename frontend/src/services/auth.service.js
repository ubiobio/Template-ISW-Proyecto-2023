import axios from './root.service';

export const login = async ({ email, password }) => {
  try {
    const response = await axios.post('auth/login', {
      email,
      password,
    });
    const { status, data } = response;
    if (status === 200) {
      console.log(data.data);
      localStorage.setItem('email', JSON.stringify(data.data.email));
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${data.data.accessToken}`;
    }
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => {
  localStorage.removeItem('email');
  delete axios.defaults.headers.common['Authorization'];
};
