import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

/** Notwendige Fonts für das Default Theme. */
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

/**
 * Das Light-Theme.
 */
export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

/**
 * Das Dark-Theme.
 */
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});
