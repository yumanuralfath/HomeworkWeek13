import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input, Button, Stack, FormControl } from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { register } from "../../../components/Auth/register";

export const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await register({ name, email, password });
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "User registered successfully.",
        timer: 1500,
      });
      navigate("/books");
    } catch (err) {
      const { response } = err;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response.data.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4} p="1rem" boxShadow="md">
        <FormControl>
          <FaUserAlt />
          <Input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FaUserAlt />
          <Input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FaLock />
          <Input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button
          borderRadius={0}
          type="submit"
          variant="solid"
          colorScheme="teal"
          width="full"
          isLoading={isLoading}
          loadingText="Registering..."
        >
          Register
        </Button>
      </Stack>
    </form>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
