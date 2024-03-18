import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { CompositeScreenProps } from "@react-navigation/native";

export type RootStackParamList = {
  BottomTabsStack: undefined;
};

export type RootNavigatorNavigationProp = NativeStackScreenProps<RootStackParamList>;
export type BottomTabsStackNavigationProp = NativeStackScreenProps<RootStackParamList, "BottomTabsStack">;

export type BottomTabsStackParamList = {
  Tasks: undefined;
};

export type TasksNavigationProp = BottomTabScreenProps<BottomTabsStackParamList, "Tasks">;

export type TaskScreenProps = CompositeScreenProps<TasksNavigationProp, RootNavigatorNavigationProp>;
