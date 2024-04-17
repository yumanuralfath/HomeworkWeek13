import { Button } from "@chakra-ui/react";
import { RiHome3Line, RiLoginBoxLine } from "react-icons/ri";
import { GiArchiveRegister } from "react-icons/gi";
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

export const RegisterLogo = () => {
  const navigate = useNavigate();
  const handleRegister = () => navigate("/register");
  return (
    <Button onClick={handleRegister} leftIcon={<GiArchiveRegister />}>
      SIGN UP
    </Button>
  );
};

export const LoginLogo = () => {
  const navigate = useNavigate();
  const handleLogin = () => navigate("/login");
  return (
    <Button onClick={handleLogin} leftIcon={<RiLoginBoxLine />}>
      LOGIN
    </Button>
  );
};
