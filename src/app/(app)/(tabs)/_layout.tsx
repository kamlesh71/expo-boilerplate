import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const createOptions = (title: string, icon: React.ComponentProps<typeof MaterialCommunityIcons>['name']) => {
    return {
        title,
        tabBarIcon: ({ color, size }: { color: string, size: number }) => (
            <MaterialCommunityIcons name={icon} color={color} size={size} />
        ),
    };
}

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={createOptions('Home', 'home')}
            />
            <Tabs.Screen
                name="notifications"
                options={createOptions('Notifications', 'bell')}
            />
            <Tabs.Screen
                name="profile"
                options={createOptions('Profile', 'account')}
            />
        </Tabs>
    );
}