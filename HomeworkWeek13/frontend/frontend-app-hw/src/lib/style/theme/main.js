import { extendTheme } from "@chakra-ui/react";

import { config } from "./config";
import { buttonTheme } from "./button";


export const theme = extendTheme({
  fonts: {
    heading: 'Plus Jakarta Sans, sans-serif',
    body: 'Plus Jakarta Sans, sans-serif',
  },
  components: {
    Button: buttonTheme
  },
  config,
});