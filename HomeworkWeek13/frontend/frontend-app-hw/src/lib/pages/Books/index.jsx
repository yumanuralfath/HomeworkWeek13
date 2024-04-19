import { Grid } from "@chakra-ui/react";
import TitlePage from "./components/titlePage";
import BooksCard from "./components/bookcard";

const Book = () => {
  return (
    <Grid gap={10}>
      <TitlePage />
      <BooksCard />
    </Grid>
  );
};

export default Book;
