import LoadingOverlay from "@/components/loading/overlay";
import { verifyAPI } from "@/services/account";
import { COLOR } from "@/utils/colorConst";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Keyboard, StyleSheet, Text, View } from "react-native"
import OTPTextView from "react-native-otp-textinput"
import Toast from "react-native-root-toast";
const styles = StyleSheet.create({
    textInputContainer: {
        justifyContent: 'space-between'
    },
    roundedTextInput: {
        borderRadius: 10,
        borderWidth: 1,
        width: 65,
        height: 65
    },
});
const VerifyPage = () => {
    const [isSubmit, setIsSubmit] = useState(false);
    const navigation = useNavigation();
    const handleTextChange = (value: string) => {
        if (value.length === 4) {
            handleSubmit(value);
        }
    }
    const handleSubmit = async (value: string) => {
        console.log(value)
        Keyboard.dismiss()
        setIsSubmit(true)
        try {
            await verifyAPI(value);
            navigation.navigate("(auth)/sign-in");
        }
        catch (error) {
            Toast.show(`${error}`, {
                duration: Toast.durations.LONG,
                position: Toast.positions.TOP,
                shadow: true,
                animation: true,
                hideOnPress: true,
            });
        }
        setIsSubmit(false)
    }
    return (
        <>
            <View style={{ marginHorizontal: 30, gap: 20 }}>
                <View style={{ marginTop: 200 }}>
                    <Text style={{ fontWeight: 600, fontSize: 36 }}>Verification Code</Text>
                    <Text style={{ fontWeight: 400, fontSize: 14, color: "#9796A1", width: 370 }}>Please type the verification code sent to prelookstudio@gmail.com</Text>
                </View>
                <OTPTextView
                    autoFocus
                    tintColor={COLOR.orange}
                    containerStyle={styles.textInputContainer}
                    textInputStyle={styles.roundedTextInput}
                    inputCount={4}
                    inputCellLength={1}
                    handleTextChange={handleTextChange}
                />
                <Text style={{ fontWeight: 500, fontSize: 16, alignSelf: 'center' }}>I don't receive a code!
                    <Text style={{ color: COLOR.orange }}> Please resend</Text>
                </Text>
            </View>
            {isSubmit && <LoadingOverlay />}
        </>
    )
}
export default VerifyPage