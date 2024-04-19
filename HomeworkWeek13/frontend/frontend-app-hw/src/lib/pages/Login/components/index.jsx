import {
  Flex,
  Stack,
  Avatar,
  Heading,
  Box,
  useColorMode,
} from "@chakra-ui/react";

import { LoginForm } from "./LoginForm";
import { useState } from "react";
import { SignUpLink } from "./SignUp";

export const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { colorMode } = useColorMode;
  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="50vh"
      backgroundColor={
        colorMode === "light"
          ? "rgba(255,255,255,0. opacity)"
          : "rgba(255,255,255, 0 0. opacity)"
      }
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">WELCOME</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <LoginForm
            showPassword={showPassword}
            handleShowClick={handleShowClick}
          />
        </Box>
      </Stack>
      <SignUpLink />
    </Flex>
  );
};
