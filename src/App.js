import React from "react";
import Router from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyle } from "./GlobalStyled.styled";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <GlobalStyle />
        <Router />
      </ChakraProvider>
    </>
  );
};

export default App;
