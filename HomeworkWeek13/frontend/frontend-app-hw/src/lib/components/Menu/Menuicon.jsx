import { useColorMode } from "@chakra-ui/react";

const MenuIcon = () => {
  const { colorMode } = useColorMode();

  // Memilih warna fill berdasarkan mode warna
  const fill = colorMode === "light" ? "black" : "white";

  return (
    <svg
      width="24px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  );
};

export default MenuIcon;
