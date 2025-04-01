import { COLOR } from "@/utils/colorConst"
import { useState } from "react"
import { StyleProp, StyleSheet, Text, TextInput, TextStyle, View } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
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
        borderColor: "blue",
        borderRadius: 10,
        padding: 10,
        width: 350,
        fontSize: 17,
        fontWeight: "500",
        height: 65,
        paddingRight: 40,
        paddingLeft: 20
    },
    eyeShown: {
        position: "absolute",
        top: 22,
        right: 10,
        color: "gray"
    }
})
interface IProp {
    title?: string,
    inputStyle?: StyleProp<TextStyle>
    titleStyle?: StyleProp<TextStyle>
    isPassword?: boolean
    value: any,
    setValue: (value: any) => void
}
const CustomInput = (props: IProp) => {
    const { title, inputStyle, titleStyle, isPassword = false, value, setValue } = props;
    const [isFocus, setIsFocus] = useState(false)
    const [isShownPassword, setIsShowPassword] = useState(true);
    return (
        <View style={styles.inputContainer}>
            {title && <Text style={[styles.inputTitle, titleStyle]}>{title}</Text>}
            <View>
                <TextInput
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    style={[styles.input, { borderColor: isFocus ? COLOR.orange : "#95a5a6" }, inputStyle]}
                    secureTextEntry={isPassword && isShownPassword}
                />
                {isPassword &&
                    <FontAwesome5 style={styles.eyeShown} name={isShownPassword ? "eye-slash" : "eye"} size={20}
                        onPress={() => { setIsShowPassword(!isShownPassword) }}
                    />}
            </View>
        </View>
    )
}
export default CustomInput