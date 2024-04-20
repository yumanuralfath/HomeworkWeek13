import instance from "../lib/axios.js";

const FetchBooks = async () => {
  const response = await instance({
    method: "GET",
    url: "/books",
  });
  const data = response.data.books;
  return data;
};


export default FetchBooks;
