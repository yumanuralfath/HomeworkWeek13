import { Button } from "@chakra-ui/react";
import { RiHome3Line, RiLoginBoxLine } from "react-icons/ri";
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
  const handleLogin = () => navigate("/login");
  return (
    <Button onClick={handleLogin} leftIcon={<RiLoginBoxLine />}>
      LOGIN
    </Button>
  );
};
