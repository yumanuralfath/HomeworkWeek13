import { Box, Button, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => navigate("/");

  return (
    <Grid gap={4} textAlign="center">
      <Heading>Page not Found</Heading>

      <Box maxWidth={[280, 400]} marginX="auto">
        <Image width={400} src="/assets/404.svg" />
      </Box>

      <Box>
        <Text>It&apos;s Okay!</Text>
        <Button onClick={handleBackToHome}>Let&apos;s Head Back</Button>
      </Box>
    </Grid>
  );
};

export default Page404;
