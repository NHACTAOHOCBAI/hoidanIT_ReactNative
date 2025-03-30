import { COLOR } from "@/utils/colorConst"
import { useState } from "react"
import { StyleProp, StyleSheet, Text, TextInput, TextStyle, View } from "react-native"
const styles = StyleSheet.create({
    inputContainer: {
        gap: 10,
    },
    inputTitle: {
        fontSize: 16,
        color: "#9796A1",
        fontWeight: "400"
    },
    input: {
        borderWidth: 1,
        borderColor: "#EEEEEE",
        borderRadius: 10,
        padding: 10,
        width: 350,
        fontSize: 17,
        fontWeight: "500",
        height: 65
    }
})
interface IProp {
    title?: string,
    inputStyle?: StyleProp<TextStyle>
    titleStyle?: StyleProp<TextStyle>
}
const CustomInput = (props: IProp) => {
    const { title, inputStyle, titleStyle } = props;
    const [isFocus, setIsFocus] = useState(false)
    return (
        <View style={styles.inputContainer}>
            {title && <Text style={[styles.inputTitle, titleStyle]}>{title}</Text>}
            <TextInput
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                style={[styles.input, { borderColor: isFocus ? COLOR.orange : "#EEEEEE" }, inputStyle]} />
        </View>
    )
}
export default CustomInput