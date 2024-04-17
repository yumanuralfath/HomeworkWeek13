import { Flex } from "@chakra-ui/react";
import Menu from "../components/Menu";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <Menu />
    </Flex>
  );
};

export default Header;
