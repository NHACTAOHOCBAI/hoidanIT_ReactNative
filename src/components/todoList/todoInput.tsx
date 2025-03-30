import { Button, StyleSheet, TextInput } from "react-native"

const TodoInput = () => {
    return (
        <>
            <TextInput
                style={styles.textInput}
                autoCapitalize='none'
                autoCorrect
            />
            <Button onPress={() => alert("hii")} title='New Todo' />
        </>
    )
}
export default TodoInput
const styles = StyleSheet.create({
    textInput: {
        borderColor: "pink",
        borderRadius: 10,
        borderWidth: 1,
        height: 40,
        padding: 10
    }
});