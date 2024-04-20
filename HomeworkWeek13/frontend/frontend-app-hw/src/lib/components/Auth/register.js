import instance from "../../../modules/lib/axios";


export const register = async (params) => {
  const { name, email, password } = params;

  const response = await instance({
    method: 'POST',
    url: '/register',
    data: {
      name,
      email,
      password
    }
  });

  const { data } = response;
  localStorage.setItem('token', data.token);
  return data;
};
