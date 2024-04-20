import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import AddBook from "../../../../modules/fetch/addBooks";
import Swal from "sweetalert2";

const CreateBookButton = () => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [year, setYear] = useState("");
  const [pages, setPages] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("publisher", publisher);
    formData.append("year", year);
    formData.append("pages", pages);
    formData.append("image", image);

    try {
      const response = await AddBook(formData);
      console.log(response);
      window.location.reload();
      // Handle success response, if needed
    } catch (error) {
      console.error(error);
      // Handle error response, if needed
      Swal.fire({
        icon: "error",
        title: "Oops...",
        timer: 1000,
        text: "Invalid Request Body",
      });
    }
  };

  return (
    <div>
      <Button onClick={() => setShowForm(true)}>Create New Book</Button>
      {showForm && (
        <Box as="form" onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Author</FormLabel>
            <Input
              type="text"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Publisher</FormLabel>
            <Input
              type="text"
              value={publisher}
              onChange={(event) => setPublisher(event.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Year</FormLabel>
            <Input
              type="text"
              value={year}
              onChange={(event) => setYear(event.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Pages</FormLabel>
            <Input
              type="text"
              value={pages}
              onChange={(event) => setPages(event.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Image</FormLabel>
            <Input
              type="file"
              onChange={(event) => setImage(event.target.files[0])}
            />
          </FormControl>
          <Button type="submit">Create Book</Button>
        </Box>
      )}
    </div>
  );
};

export default CreateBookButton;
