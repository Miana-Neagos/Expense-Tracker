import { View } from "react-native"
import CustomInput from "./CustomInput"

export const ExpenseForm = () => {

    const amountInputHandler = (input : string) => {
        console.log("Amount input handler", input)
    }
    return (
        <View>
            <CustomInput  label="Amout" textInputConfig={{
                keyboardType: "decimal-pad",
                onChangeText: amountInputHandler,
            }}/>
            <CustomInput  label="Date" textInputConfig={{
                placeholder: 'YYYY-MM-DD',
                maxLength: 10,
                keyboardType: "number-pad",
                onChangeText: (input) => {
                    console.log("Date input handler", input);
                    
                },
            }}/>
            <CustomInput  label="Description" textInputConfig={{
                placeholder: 'Enter description',
                multiline: true,
                autoCorrect: false, 
                onChangeText: (input) => {
                    console.log("Description input handler", input);
                    
                },
            }}/>     
        </View>
    )
}