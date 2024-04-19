import instance from "../lib/axios";

export const getBooks = async () => {
  const response = await instance({
    method: "GET",
    url: "/books",
  })
  const data = response.data;
  return data;
}