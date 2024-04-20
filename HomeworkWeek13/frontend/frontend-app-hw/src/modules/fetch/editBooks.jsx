import instance from "../lib/axios";

const EditBook = async (id, updatedBook) => {
  try {
    const response = await instance({
      method: "PUT",
      url: `/books/${id}`,
      data: updatedBook, // Send the updated book data in the request body
    });
    return response.data;
  } catch (error) {
    console.error(`Error Editing book with ID ${id}:`, error);
    throw error;
  }
};

export default EditBook;
