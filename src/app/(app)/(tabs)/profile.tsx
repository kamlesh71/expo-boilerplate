import { Link } from "expo-router";
import { View } from "react-native";
import { Button } from "react-native-paper";

export default function ProfileTab() {
    return (
        <View style={{  marginTop: 40  }}>
            <Link href="/(app)/profile/edit-profile" asChild>
                <Button>Edit Profile</Button>
            </Link>
        </View>
    )
}