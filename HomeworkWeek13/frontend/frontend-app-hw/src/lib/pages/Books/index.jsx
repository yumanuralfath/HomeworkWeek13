import { Grid } from "@chakra-ui/react";
import TitlePage from "./components/titlePage";
import BooksCard2 from "./components/bookcard3";
import CreateBookButton from "./components/addBook";

const Book = () => {
  return (
    <Grid gap={10}>
      <TitlePage />
      <CreateBookButton />
      <BooksCard2 />
    </Grid>
  );
};

export default Book;
