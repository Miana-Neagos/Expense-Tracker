import { View, TextInput, Text, TextInputProps, StyleSheet, StyleProp, ViewStyle, TextStyle } from "react-native";
import { globalStyles } from "../../constants/styles";

type InputProps = {
    label : string,
    errorText?: string,
    textInputConfig? : TextInputProps;
    style? : StyleProp<ViewStyle | TextStyle>
}

const CustomInput = ({label, errorText, style,  textInputConfig} : InputProps) => {
    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} {...textInputConfig}/>
            {errorText && <Text style={styles.errorText}>{errorText}</Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    label: {
        marginBottom: 4,
        marginTop: 8,
        color: globalStyles.colors.primary50,
        fontFamily: 'Roboto_700Bold',
    },
    input: {
        backgroundColor: globalStyles.colors.primary50,
        paddingHorizontal: 5,
        paddingVertical: 6,
        borderRadius: 5,
        fontSize: 18,
        fontFamily: 'Roboto_400Regular',
        textAlignVertical: 'top',
    },
      errorText: {
        color: globalStyles.colors.error100,
        marginTop: 4,
        fontSize: 14,
        fontFamily: "Roboto_400Regular",
        textAlign: 'center'
      },
})
export default CustomInput;

