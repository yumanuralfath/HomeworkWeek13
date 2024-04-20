import instance from "../lib/axios";

const AddBook = async (formData) => {
  try {
    const response = await instance.post("/books", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding book:", error);
    throw error;
  }
};

export default AddBook;
