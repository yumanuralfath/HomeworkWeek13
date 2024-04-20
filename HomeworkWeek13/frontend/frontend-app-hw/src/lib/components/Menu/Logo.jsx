import { Button } from "@chakra-ui/react";
import { RiHome3Line, RiLoginBoxLine, RiBook3Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();
  const handleBackToHome = () => navigate("/");

  return (
    <Button onClick={handleBackToHome} leftIcon={<RiHome3Line />}>
      HOME
    </Button>
  );
};

export const LoginLogo = () => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token") !== null;

  // eslint-disable-next-line no-unused-vars
  const handleLogin = () => navigate("/login");
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return isAuth ? (
    <Button
      as="button"
      onClick={handleLogout}
      variant="outline"
      leftIcon={<RiLoginBoxLine />}
    >
      LOG OUT
    </Button>
  ) : null;
};

export const BookLogo = () => {
  const navigate = useNavigate();
  const handleToBook = () => navigate("/books");

  return (
    <Button  onClick={handleToBook} leftIcon={<RiBook3Fill />}>
      BOOK
    </Button>
  );
};
