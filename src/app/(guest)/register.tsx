import { Container, Spacer } from "@/components";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function LoginScreen() {
    return (
        <Container style={styles.container}>
            <TextInput
                mode="outlined"
                label="Name"
                right={<TextInput.Icon icon="account" />}
            />
            <Spacer vertical={20} />

            <TextInput
                mode="outlined"
                label="Email"
                right={<TextInput.Icon icon="email" />}
            />
            <Spacer vertical={20} />

            <TextInput
                label="Password"
                mode="outlined"
                secureTextEntry
                right={<TextInput.Icon icon="lock" />}
            />
            <Spacer vertical={30} />

            <Button mode="contained">Create Account</Button>
            <Spacer vertical={40} />

            <Link href="/" asChild>
                <Button>Sign In</Button>
            </Link>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center' },
});