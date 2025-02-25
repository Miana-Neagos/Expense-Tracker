import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../constants/styles";

type IconButtonProps = {
    icon: keyof typeof Ionicons.glyphMap,
    size: number,
    color: string,
    onPress: () => void,
}
const IconButton = ({icon, size, color, onPress}: IconButtonProps) => {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.container}>
                <Ionicons name={icon} size={size} color={color}/>
            </View>
        </Pressable>
    )
};

const styles= StyleSheet.create({
    container: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 12,
        // backgroundColor: globalStyles.colors.primary500,
    },
    pressed: {
        opacity: 0.75,
    }
})

export default IconButton;