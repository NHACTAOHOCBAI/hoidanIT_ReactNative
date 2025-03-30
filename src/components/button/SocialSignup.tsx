import { Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import fbLogo from '@/assets/auth/facebook.png'
import ggLogo from '@/assets/auth/google.png'
interface IProp {
    color?: string
}
const SocialSignup = (props: IProp) => {
    let { color } = props;
    color = color ? color : "white"
    return (
        <>
            <View style={{
                gap: 20,
                marginBottom: 20
            }}>
                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: "space-evenly",
                    marginHorizontal: 10,

                }} >
                    <View style={{ width: 89, height: 1, backgroundColor: color }} />
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color: color
                    }}>sign in with</Text>
                    <View style={{ width: 89, height: 1, backgroundColor: color }} />
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                }}>
                    <CustomButton
                        title="facebook"
                        icon={<Image source={fbLogo} />}
                        textStyle={{ textTransform: "uppercase", fontSize: 13, fontWeight: 500 }}
                        btnStyle={{
                            width: 130,
                            backgroundColor: "white",
                            paddingLeft: 10,
                        }}
                    />
                    <CustomButton
                        title="Google"
                        icon={<Image source={ggLogo} />}
                        textStyle={{ textTransform: "uppercase", fontSize: 13, fontWeight: 500 }}
                        btnStyle={{
                            width: 130, backgroundColor: "white",
                            paddingLeft: 10,
                        }}
                    />
                </View>
            </View>
        </>
    )
}
export default SocialSignup;