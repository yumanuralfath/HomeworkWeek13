import {
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

import PropTypes from "prop-types";
import Swal from "sweetalert2";

import { login } from "../../../components/Auth/auth";
import { useState } from "react";

export const LoginForm = ({ showPassword, handleShowClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await login({ email, password });
    } catch (err) {
      const { response } = err;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        timer: 1000,
        text: response.data.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form>
      <Stack spacing={4} p="1rem" boxShadow="md">
        <FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FaUserAlt />
            </InputLeftElement>
            <Input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FaLock />
            </InputLeftElement>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          borderRadius={0}
          type="submit"
          variant="solid"
          colorScheme="teal"
          width="full"
          onClick={handleSubmit}
          isLoading={isLoading}
          loadingText="Logging In..."
        >
          Login
        </Button>
      </Stack>
    </form>
  );
};

LoginForm.propTypes = {
  showPassword: PropTypes.bool.isRequired,
  handleShowClick: PropTypes.func.isRequired,
};
