import { ReactNode } from "react"
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native"
const styles = StyleSheet.create({
    btnContainter: {
        flexDirection: "row",
        backgroundColor: "orange",
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        gap: 10,
        alignSelf: 'flex-start',
        justifyContent: 'space-around',
        height: 54,
        alignItems: 'center',
        elevation: 5,
    },
    btnText: {
        verticalAlign: "middle"
    }
})
interface IProp {
    onClick?: () => void
    title: string,
    icon?: ReactNode,
    textStyle?: StyleProp<TextStyle>
    btnStyle?: StyleProp<ViewStyle>
}
const CustomButton = (props: IProp) => {
    const { onClick, textStyle, btnStyle, title, icon } = props
    return (
        <>
            <Pressable onPress={onClick}>
                <View style={[styles.btnContainter, btnStyle]}>
                    {icon}
                    <Text style={[styles.btnText, textStyle]}>{title}</Text>
                </View>
            </Pressable>
        </>
    )
}
export default CustomButton