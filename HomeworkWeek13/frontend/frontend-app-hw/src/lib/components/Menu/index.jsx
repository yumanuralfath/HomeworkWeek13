import React from "react";
import NavBarContainer from "./NavbarContainer";
import MenuToggle from "./MenuToggle";
import MenuLinks from "./MenuLink";
import ThemeToggle from "./ThemeToggle";

const Menu = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
      <ThemeToggle />
    </NavBarContainer>
  );
};

export default Menu;
