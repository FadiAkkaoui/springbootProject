/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom/client";
import ApplicationRoutes from "./components/ApplicationRoutes.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme.js";
import i18n from "./translations/i18n";
import 'flag-icons'
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <ApplicationRoutes />
  </ChakraProvider>
);
