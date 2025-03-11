import { View, TextInput, Text, KeyboardTypeOptions, TextInputProps } from "react-native";

type InputProps = {
    label : string,
    textInputConfig? : TextInputProps;
}

const CustomInput = ({label, textInputConfig} : InputProps) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput {...textInputConfig}/>
        </View>
    )
}

export default CustomInput;