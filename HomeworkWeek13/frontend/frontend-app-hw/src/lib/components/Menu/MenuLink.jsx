import { Box, Stack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { LoginLogo, Logo } from "./Logo";

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <Logo />
        <LoginLogo />
      </Stack>
    </Box>
  );
};

MenuLinks.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MenuLinks;
