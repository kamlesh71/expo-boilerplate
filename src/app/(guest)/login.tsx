import { ColorSchemaPicker, Container, Spacer } from "@/components";
import { loginSagaAction } from "@/store/auth/actions";
import { selectAuthLoading } from "@/store/auth/selectors";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

export default function LoginScreen() {

    const loading = useSelector(selectAuthLoading);
    const dispatch = useDispatch();

    return (
        <Container style={styles.container}>
            <TextInput
                right={<TextInput.Icon icon="email" />}
                mode="outlined"
                label="Email"
            />

            <Spacer vertical={20} />

            <TextInput
                right={<TextInput.Icon icon="lock" />}
                mode="outlined"
                label="Password"
                secureTextEntry
            />

            <Spacer vertical={30} />

            <Button
                onPress={() =>
                    dispatch(
                        loginSagaAction({
                            email: 'kamlesh@example.com',
                            password: '123456',
                        }),
                    )
                }
                loading={loading}
                disabled={loading}
                mode="contained">
                Login
            </Button>

            <Spacer vertical={40} />

            <Link href="/register" asChild>
                <Button>
                    Create an Account
                </Button>
            </Link>

            <Spacer vertical={80} />
            <ColorSchemaPicker />
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});