import { StyleSheet } from "react-native";

export const globalStyles = {
  colors: {
    primary10: "#efeded",   // Lighter Stone
    primary50: "#dcd9d8", // Warm Stone (Soft neutral highlight)
    primary100: "#8c807b", // Muted Ash (Light contrast)
    primary200: "#625b58", // Aged Charcoal (Mid-tone)
    primary400: "#3d454c", // Deep Slate (Cool tone balance)
    primary500: "#334240", // Dark Graphite Green (Strong base)
    primary5002: "#423335", // Chocolate Brown (Strong Base)
    primary700: "#1d2620", // **Obsidian Green (Deep background)**
    primary800: "#0c110b", // **Pure Blackened Green (Extra depth)**
    accent500: "#c09553", // Aged Gold (Rich, warm contrast)
    error50: "#e4b4a2", // Soft Clay (Subtle warm error)
    error100: "#ED4337", // Soft error red
    error500: "#8c3d44", // Dark Brick (Sophisticated error tone)
    gray500: "#5c5147", // Warm Taupe (Balanced gray)
    gray700: "#3e342c", // Deep Brown-Gray (Strong neutral)
  },
  fonts: StyleSheet.create({
    textRegular: {
      fontFamily: "Roboto_400Regular",
    },
    textBold: {
      fontFamily: "Roboto_700Bold",
    },
    textItalic: {
      fontFamily: "Roboto_400Regular_Italic",
    },
    textBoldItalic: {
      fontFamily: "Roboto_700Bold_Italic",
    },
  }),
};
