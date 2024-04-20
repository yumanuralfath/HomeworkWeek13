import { Grid } from "@chakra-ui/react";
import TitlePage from "./components/titlePage";
import BooksCard2 from "./components/bookcard3";

const Book = () => {
  return (
    <Grid gap={10}>
      <TitlePage />
      <BooksCard2 />
    </Grid>
  );
};

export default Book;
