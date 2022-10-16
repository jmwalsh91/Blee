import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    primary: {
      50: "#0A452C",
      100: "#106045",
      200: "#177960",
      300: "#20917E",
      400: "#29A89E",
      500: "#41B59F",
      600: "#59C1A3",
      700: "#73CDA9",
      800: "#8CD8B2",
      900: "#A7E2BE",
    },
    secondary: {
      50: "#243C61",
      100: "#344D88",
      200: "#465CB0",
      300: "#5A67D7",
      400: "#6E71FA",
      500: "#7D8EFD",
      600: "#8DA8FF",
      700: "#9EC0FF",
      800: "#AFD4FF",
      900: "#C1E5FF",
    },
    success: {
      50: "#35613A",
      100: "#4B8757",
      200: "#63AC78",
      300: "#7CD19C",
      400: "#95F4C1",
      500: "#A0F7BF",
      600: "#ACFABF",
      700: "#B8FCC2",
      800: "#C5FDC7",
      900: "#D5FED2",
    },
    error : {
      50: "#5A1C3B",
      100: "#7D2A4C",
      200: "#9F3859",
      300: "#BF4864",
      400: "#DE596D",
      500: "#E46B8A",
      600: "#EA7EA5",
      700: "#EF91BD",
      800: "#F4A5D2",
      900: "#F7B9E4",
    },
  },
  config: {
    initialColorMode: 'dark'
  }
};
