import instance from "../../../modules/lib/axios";

export const login = async (params) => {
  const { email, password } = params;

  const response = await instance({
    method: 'POST',
    url: '/login',
    data: {
      email,
      password
    }
  })

  const { data } = response;
  localStorage.setItem('token', data.token);
  return data;
}