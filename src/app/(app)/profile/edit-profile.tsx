import { Stack } from "expo-router";
import { Text } from "react-native-paper";

const EditProfileScreen = () => {
    return (
        <>
            <Stack.Screen options={{ title: "Edit Profile" }} />
            <Text>Edit Profile</Text>
        </>
    )
}

export default EditProfileScreen;