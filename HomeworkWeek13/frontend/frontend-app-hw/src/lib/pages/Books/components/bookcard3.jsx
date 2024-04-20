import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  ButtonGroup,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import FetchBooks from "../../../../modules/fetch/getBooks";
import DeleteBook from "../../../../modules/fetch/deleteBooks";
import EditBook from "../../../../modules/fetch/editBooks";

const BooksCard2 = () => {
  const [books, setBooks] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedBook, setSelectedBook] = useState(null);
  const [title, setTitle] = useState("");
  const [pages, setPages] = useState("");
  const [publisher, setPublisher] = useState("");
  const [year, setYear] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchBooks();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (book) => {
    setSelectedBook(book);
    setTitle(book.title);
    setPages(book.pages);
    setPublisher(book.publisher);
    setYear(book.year);
    setAuthor(book.author);
    console.log(book);
    onOpen();
  };

  const handleDelete = async (id, index) => {
    try {
      await DeleteBook(id);
      const updatedBooks = [...books];
      updatedBooks.splice(index, 1);
      setBooks(updatedBooks);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedBook = {
        title,
        pages,
        publisher,
        year,
        author,
      };
      await EditBook(selectedBook.id, updatedBook);
      const updatedBooks = books.map((book) =>
        book.id === selectedBook.id ? updatedBook : book
      );
      setBooks(updatedBooks);
      onClose();
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <SimpleGrid spacing={4} columns={{ sm: 1, md: 2, lg: 3 }}>
      {books.length > 0 ? (
        books.map((book, index) => (
          <Card key={index} maxW="300px">
            <CardBody>
              <Image src={book.image} alt={book.title} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{book.title}</Heading>
                <Text>PAGE: {book.pages}</Text>
                <Text>PUBLISHER: {book.publisher}</Text>
                <Text>YEAR: {book.year}</Text>
                <Text>AUTHOR: {book.author}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  ml="4"
                  colorScheme="blue"
                  onClick={() => handleEdit(book)}
                >
                  EDIT
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => handleDelete(book.id, index)}
                >
                  DELETE
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))
      ) : (
        <Text>No books available</Text>
      )}

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>Edit Book</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedBook && (
              <>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Pages</FormLabel>
                  <Input
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Publisher</FormLabel>
                  <Input
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Year</FormLabel>
                  <Input
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Author</FormLabel>
                  <Input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </FormControl>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
            <Button onClick={handleUpdate}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </SimpleGrid>
  );
};

export default BooksCard2;
