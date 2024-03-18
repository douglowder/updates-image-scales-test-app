import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tasks from "@screens/Tasks/Tasks";

import { BottomTabsStackParamList, RootNavigatorNavigationProp } from "./types";

export function HomeTabsNavigator({ route, navigation }: RootNavigatorNavigationProp) {
  // const navigation = useNavigation<TasksScreenNavigationProp>();

  const Tab = createBottomTabNavigator<BottomTabsStackParamList>();

  function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome5>["name"]; color: string }) {
    return <FontAwesome5 size={28} style={{ marginBottom: -3 }} {...props} />;
  }

  return (
    <Tab.Navigator
      initialRouteName="Tasks"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Tab.Screen
        component={Tasks}
        name="Tasks"
        options={{
          freezeOnBlur: true,
          title: "Tasks",
          tabBarIcon: ({ color }) => <TabBarIcon name="tasks" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
