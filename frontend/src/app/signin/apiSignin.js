import api from '@/api/rootAPI';

const ROOT = '/auth';

export const signin = async (email) => {
  const response = await api.post(`${ROOT}/signin`, {
    email,
  });
  const token = response.data.data.token;
  localStorage.setItem('token', token);
  return response;
};
