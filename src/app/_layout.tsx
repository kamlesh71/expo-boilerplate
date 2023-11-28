import { ThemeProvider as NavigationThemeProvider, Theme } from "@react-navigation/native";
import { PaperProvider } from 'react-native-paper';
import { Stack, useRouter, useSegments } from "expo-router";
import { DarkTheme, LightTheme } from "@/constants/theme";
import { Provider, useSelector } from "react-redux";
import { selectActiveColorSchema } from "@/store/color-schema/selectors";
import { store } from "@/store";
import { StatusBar } from "expo-status-bar";
import { selectLoggedIn } from "@/store/auth/selectors";
import { useEffect } from "react";

export default function RootApp() {
    return (
        <Provider store={store}>
           
            <RootLayout />
        </Provider>
    );
}

function RootLayout() {

    const colorSchema = useSelector(selectActiveColorSchema);
    const isLoggedIn = useSelector(selectLoggedIn);
    const segments = useSegments();
    const router = useRouter();

    const appTheme = colorSchema === 'light' ? LightTheme : DarkTheme;

    useEffect(() => {

        if (segments[0] !== '(guest)' && !isLoggedIn) {
            router.replace('/(guest)/login');
        } else if (isLoggedIn && segments[0] === '(guest)') {
            router.replace('/(app)/(tabs)');
        }
    }, [isLoggedIn, segments]);

    return (
        <PaperProvider theme={appTheme}>
            <NavigationThemeProvider value={appTheme as unknown as Theme}>
                <StatusBar style={colorSchema !== 'light' ? 'light' : 'dark'} />
                <RootNavigation />
            </NavigationThemeProvider>
        </PaperProvider>
    )
}


function RootNavigation() {
    return (
        <Stack>
            <Stack.Screen name='(guest)/login' options={{ title: 'Sign In' }} />
            <Stack.Screen name='(guest)/register' options={{ title: 'Sign Up' }} />
            <Stack.Screen name='(app)/(tabs)' options={{ headerShown: false }} />
            <Stack.Screen name='(app)/profile/edit-profile' />
        </Stack>
    )
}