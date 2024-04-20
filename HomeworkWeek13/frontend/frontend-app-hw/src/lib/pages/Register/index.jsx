import { Grid, Heading, Text } from "@chakra-ui/react";
import { RegisterForm } from "./components";

const Register = () => {
  return (
    <Grid gap={2}>
      <Text fontSize="50px" align="center">
        SIGN UP
      </Text>
      <RegisterForm />
    </Grid>
  );
};

export default Register;
