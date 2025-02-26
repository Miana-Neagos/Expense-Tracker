import { ReactNode } from "react"
import { Pressable, View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from "react-native";
import { globalStyles } from "../../constants/styles";

type CustomButtonProps = {
    children: ReactNode,
    onPress: () => void,
    mode?: string,
    style?: StyleProp<ViewStyle | TextStyle>
}
const CustomButton = ({children, onPress, mode, style} : CustomButtonProps) => {
    console.log({children});
    
    return (
        <View style={style}>
            <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
                <View style={[styles.button, mode === 'flat' && styles.flat]}>
                    <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 8,
        borderRadius: 6,
        backgroundColor: globalStyles.colors.primary500,
        borderWidth: 2,
        borderColor: globalStyles.colors.accent500,
    },
    flat: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: globalStyles.colors.accent500,
    },
    buttonText: {
        textAlign: 'center',
        color: globalStyles.colors.primary50,
        fontFamily: globalStyles.fonts.textBold.fontFamily,
    },
    flatText: {
        color: globalStyles.colors.accent500,
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: globalStyles.colors.primary100,
        borderRadius: 6,
    },
})

export default CustomButton;