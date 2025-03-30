import React from "react";
import { Keyboard, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback } from "react-native";
import CustomButton from "@/components/button/CustomButton";
import CustomInput from "@/components/input/CutomInput";
import { COLOR } from "@/utils/colorConst";
import SocialSignup from "@/components/button/SocialSignup";

const SignUpPage = () => {
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
                    <CustomInput title="Full name" />
                    <CustomInput title="E-mail" />
                    <CustomInput title="Password" />
                    <CustomButton
                        title="Sign up"
                        textStyle={{
                            color: "white",
                            textTransform: "uppercase",
                            fontSize: 15,
                            fontWeight: "600"
                        }}
                        btnStyle={{ backgroundColor: '#FE724C', width: 248 }}
                    />
                    <Text style={{
                        fontSize: 14,
                        fontWeight: "500"
                    }}>
                        Already have an account?
                        <Text style={{ color: COLOR.orange }}> Login</Text>
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
