import { StyleSheet, Text, View } from "react-native"
import CustomButton from "../components/button/CustomButton"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "red",
        borderWidth: 5,
    },
    welcomeText: {
        flex: 0.6,
        borderColor: "green",
        borderWidth: 5,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: 10
    },
    welcomeButton: {
        flex: 0.4,
        borderColor: "yellow",
        borderWidth: 5,
    },
    welcomeFirst: {
        fontSize: 40,
        color: "black",
        fontWeight: "bold"
    },
    welcomeSecond: {
        fontSize: 40,
        color: "orange",
        fontWeight: "bold"
    },
    welcomeThird: {
        fontSize: 18,
        color: 'black',
    }
})
const WelcomePage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.welcomeText}>
                <Text style={styles.welcomeFirst}>
                    Welcome to
                </Text>
                <Text style={styles.welcomeSecond}>
                    FuckHub
                </Text>
                <Text style={styles.welcomeThird}>
                    Your favorite foods delivered fast at your door
                </Text>
            </View>
            <View style={styles.welcomeButton}>
                <View>
                    <Text>sign in with</Text>
                </View>
                <View>
                    <CustomButton
                        title="faceBook"
                        textStyle={{ textTransform: "uppercase" }}
                        btnStyle={{ width: "auto", alignSelf: "flex-start" }}
                    />
                    {/* <View>
                        <Text> FACEBOOK</Text>
                    </View>
                    <View>
                        <Text> GOOGLE</Text>
                    </View>
                    <View>
                        <Text>Start with your email</Text>
                    </View> */}
                </View>
                <View>
                    <Text>Already have an account? Sign in</Text>
                </View>
            </View>
        </View>
    )
}
export default WelcomePage