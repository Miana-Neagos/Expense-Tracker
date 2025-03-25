import { View, TextInput, Text, TextInputProps, StyleSheet, StyleProp, ViewStyle, TextStyle } from "react-native";
import { globalStyles } from "../../constants/styles";

type InputProps = {
    label : string,
    errorText?: string,
    textInputConfig? : TextInputProps;
    style? : StyleProp<ViewStyle | TextStyle>
}

const CustomInput = ({label, errorText, style,  textInputConfig} : InputProps) => {
    const isInvalid = !!errorText;

    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.label, isInvalid && styles.errorLabel]}>{label}</Text>
            <TextInput style={[styles.input, isInvalid && styles.invalidInput]} {...textInputConfig}/>
              <Text style={styles.errorText}> {errorText ? errorText : ''}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'flex-start',
        marginHorizontal: 15,
    },
    label: {
        marginBottom: 4,
        marginTop: 8,
        color: globalStyles.colors.primary50,
        fontFamily: 'Roboto_700Bold',
    },
    errorLabel: {
        color: globalStyles.colors.error100,
    },
    invalidInput: {
        backgroundColor: globalStyles.colors.primary10,
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
        fontSize: 12,
        fontFamily: "Roboto_400Regular",
        textAlign: 'left',
        minHeight: "8%",
      },
})
export default CustomInput;

