import React, { useState } from "react";
import { Keyboard, Text, TextInput, View, TouchableWithoutFeedback } from "react-native";
import CustomButton from "@/components/button/CustomButton";
import CustomInput from "@/components/input/CutomInput";
import { COLOR } from "@/utils/colorConst";
import SocialSignup from "@/components/button/SocialSignup";
import { registerAPI } from "@/services/account";
import Toast from "react-native-root-toast";
import { Link, useNavigation } from "expo-router";

const SignUpPage = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isToastVisible, setIsToastVisible] = useState(false);
    const navigation = useNavigation();
    const handleSignUp = () => {
        try {
            registerAPI({ email, fullName, password })
            navigation.navigate("(auth)/verify");
        }
        catch (error) {
            if (!isToastVisible) {
                setIsToastVisible(true);
                Toast.show(`${error}`, {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.TOP,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    onHidden: () => setIsToastVisible(false),
                });
            }
        }
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
                <View style={{
                    paddingHorizontal: 30,
                    gap: 25,
                    alignItems: 'center',
                    paddingBottom: 30,
                    paddingTop: 110
                }}>
                    <Text style={{
                        fontSize: 34.61,
                        fontWeight: "600",
                        alignSelf: "flex-start"
                    }}>Sign Up </Text>
                    <CustomInput
                        value={fullName}
                        setValue={setFullName}
                        title="Full name" />
                    <CustomInput
                        value={email}
                        setValue={setEmail}
                        title="E-mail" />
                    <CustomInput
                        value={password}
                        setValue={setPassword}
                        title="Password" isPassword={true} />
                    <CustomButton
                        title="Sign up"
                        textStyle={{
                            color: "white",
                            textTransform: "uppercase",
                            fontSize: 15,
                            fontWeight: "600"
                        }}
                        btnStyle={{ backgroundColor: '#FE724C', width: 248 }}
                        onClick={handleSignUp}
                    />
                    <Text style={{
                        fontSize: 14,
                        fontWeight: "500"
                    }}>
                        Already have an account?
                        <Link href={"/(auth)/sign-in"}>
                            <Text style={{ color: COLOR.orange }}> Login</Text>
                        </Link>
                    </Text>
                </View>
                <View style={{
                    marginTop: 25
                }}>
                    <SocialSignup
                        color="black"
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default SignUpPage;
