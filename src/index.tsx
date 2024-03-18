import React from "react";
import { RootLayout } from "@navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Constants from "expo-constants";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { setJSExceptionHandler, setNativeExceptionHandler } from "react-native-exception-handler";
import { enableFreeze } from "react-native-screens";

const hostUri = Constants?.expoConfig?.hostUri;

// any errors caught by the error boundary should be sent to sentry
export function handleJSErrorForErrorBoundary(error: any, stackTrace: string) {
  // Show error locally on DEBUG mode
  // console.log("error boundary hit");
  // console.log(stackTrace, error);
  // Send error to Sentry
}

// handle js errors caught by exception handler
setJSExceptionHandler((error, isFatal) => {
  JSExceptionHandler(error);
}, true);

function JSExceptionHandler(error: any) {
  // Show error locally on DEBUG mode
  console.log("An error happened: ", error);
  // Send error to Sentry
  // Sentry.Native.captureException("this is the exception handler");
  // Display error to the user
  // Bonus: you might also want to get more information from the user
  // showErrorDialogWithFeedback(error, sentryId);
}

// handle native errors caught by exception handler
const nativeExceptionHandler = (exceptionString: String) => {
  // Show error locally on DEBUG mode
  console.log("An error happened: ", exceptionString);
  // Send error to Sentry
};

setNativeExceptionHandler(
  nativeExceptionHandler,
  false, // fix WIX RNN bug on Android because Android recreates the application above the crash screen
);

enableFreeze();

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RootLayout />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
