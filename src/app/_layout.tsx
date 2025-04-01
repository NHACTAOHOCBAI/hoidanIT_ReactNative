import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';

export default function StackLayout() {
    return (
        <RootSiblingParent>
            <SafeAreaView style={{ flex: 1 }}>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="index" />
                    <Stack.Screen name="(auth)/sign-up" />
                    <Stack.Screen name="(auth)/verify" />
                    <Stack.Screen name="(auth)/sign-in" />
                </Stack>
            </SafeAreaView>
        </RootSiblingParent>
    );
}