import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./lib/layout/main";
import Routings from "./lib/router/Routing";
import { theme } from "./lib/style/theme/main";

const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
        <Layout>
          <Routings />
        </Layout>
    </Router>
  </ChakraProvider>
);

export default App;
