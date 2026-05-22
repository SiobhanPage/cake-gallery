import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
} as const;

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#888888",
      500: "#6d6d6d",
      600: "#4e4e4e",
      700: "#383838",
      800: "#282828",
      900: "#111111",
    },
  },
});

export default theme;
