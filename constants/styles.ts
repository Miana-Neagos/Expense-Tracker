import { StyleSheet } from "react-native";

export const GlobalStyles = {
    colors: {
        "primary50": "#f3e5d7",   // Soft Beige
        "primary100": "#e0c3a6",  // Warm Tan
        "primary200": "#c49a6c",  // Muted Ochre
        "primary400": "#8c5f2e",  // Rich Umber
        "primary500": "#704421",  // Deep Chestnut
        "primary700": "#50321a",  // Dark Walnut
        "primary800": "#3b2612",  // Earthy Espresso
        "accent500": "#d6a429",   // Golden Mustard (earthy version of yellow)
        "error50": "#f8dcd5",     // Soft Clay
        "error500": "#b03a2e",    // Rust Red
        "gray500": "#5c5147",     // Warm Gray
        "gray700": "#3e342c"      // Deep Brown-Gray
    }
} 

export const globalStyles = StyleSheet.create({
    textRegular: {
        fontFamily: 'Roboto_400Regular',
    },
    textBold: {
        fontFamily: 'Roboto_700Bold',
    },
    textItalic: {
        fontFamily: 'Roboto_400Regular_Italic',
    },
    textBoldItalic: {
        fontFamily: 'Roboto_700Bold_Italic',
    },
})