import { Box } from "@chakra-ui/react";
import MenuIcon from "./Menuicon";
import PropTypes from "prop-types";
import CloseIcon from "./MenuClose";

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

MenuToggle.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default MenuToggle;
