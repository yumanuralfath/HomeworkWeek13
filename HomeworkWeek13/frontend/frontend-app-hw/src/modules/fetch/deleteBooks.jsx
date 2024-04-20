import instance from "../lib/axios";

const DeleteBook = async (id) => {
  try {
    const response = await instance({
      method: "DELETE",
      url: `/books/${id}`,
    });
    return response.data;
  } catch (error) {
    console.error(`Error deleting book with ID ${id}:`, error);
    throw error;
  }
};

export default DeleteBook;
