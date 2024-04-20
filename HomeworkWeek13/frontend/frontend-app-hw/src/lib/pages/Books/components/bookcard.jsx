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
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import FetchBooks from "../../../../modules/fetch/getBooks";
import DeleteBook from "../../../../modules/fetch/deleteBooks";



const BooksCard = () => {
  const [books, setBooks] = useState([]);

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

  return (
    <SimpleGrid spacing={4} columns={{ sm: 1, md: 2, lg: 3 }}>
      {books.length > 0 ? (
        books.map((book, index) => (
          <Card key={index} maxW="300px">
            <CardBody>
              <Image
                src={book.image}
                alt={book.title}
                borderRadius="lg"
              />
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
                <Button variant="solid" colorScheme="blue">
                  EDIT
                </Button>
                <Button
                  variant="ghost"
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
    </SimpleGrid>
  );
};

export default BooksCard;
