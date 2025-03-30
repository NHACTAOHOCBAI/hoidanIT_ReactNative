import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"

import { COLOR } from "@/utils/colorConst"
import CustomButton from "@/components/button/CustomButton"

import bg from '@/assets/auth/welcome-background.png'
import { LinearGradient } from "expo-linear-gradient";
import { Link, Redirect } from "expo-router"
import SocialSignup from "@/components/button/SocialSignup"
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcomeText: {
        flex: 0.7,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: 20
    },
    welcomeButton: {
        flex: 0.3,
    },
    welcomeFirst: {
        fontSize: 40,
        color: "black",
        fontWeight: "bold"
    },
    welcomeSecond: {
        fontSize: 40,
        color: COLOR.orange,
        fontWeight: "bold"
    },
    welcomeThird: {
        fontSize: 18,
        color: '#30384F',
        width: 250
    }
})
const WelcomePage = () => {
    // return (
    //     <Redirect href={"/(auth)/SignUp"} />
    // )
    return (
        <ImageBackground source={bg} style={{
            flex: 1
        }}>
            <LinearGradient style={{
                flex: 1
            }}
                colors={['transparent', '#191B2F']}
                locations={[0.2, 0.9]}
            >
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
                        <SocialSignup />
                        <View style={{
                            alignItems: 'center',
                            marginBottom: 20
                        }}>
                            <CustomButton
                                title="Start with your email"

                                textStyle={{ fontSize: 17, fontWeight: 500, color: "white" }}
                                btnStyle={{
                                    width: 324, backgroundColor: 'rgba(253, 253, 253, 0.2)',
                                    paddingLeft: 10,
                                    borderWidth: 1,
                                    borderColor: "white"
                                }}
                            />
                        </View>
                        <View style={{
                            alignItems: 'center',
                        }}>
                            <Link href={"/(auth)/SignUp"}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: "white",

                                }}>Don't have any account?
                                    <Text style={{ textDecorationLine: 'underline' }}> Sign Up</Text>
                                </Text>
                            </Link>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>
    )
}
export default WelcomePage