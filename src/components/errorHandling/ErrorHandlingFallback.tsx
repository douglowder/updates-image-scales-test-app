import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Button } from "@components/core";
import { StyleSheet } from "react-native";

export const ErrorBoundaryFallback = (props: { error: Error; resetError: Function }) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>Oops!</Text>
      <Text style={styles.subtitle}>{"There's an error"}</Text>
      <Text style={styles.error}>{props.error.toString()}</Text>
      <Button onPress={props.resetError} title="Try Again" />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    flex: 1,
    justifyContent: "center",
  },
  content: {
    marginHorizontal: 16,
  },
  title: {
    fontSize: 48,
    fontWeight: "300",
    paddingBottom: 16,
    color: "#000",
  },
  subtitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#000",
  },
  error: {
    paddingVertical: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
});
