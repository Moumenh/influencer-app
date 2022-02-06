import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Router from "./src/Navigations/Router";
import { Provider as StoreProvider } from "react-redux";
import store from "./src/Redux/store";

const App = () => {
  return (
    <StoreProvider store={store}>
      <View>
        <Text>Welcome To Out App !!</Text>
        <StatusBar style="auto" />
        <Router />
      </View>
    </StoreProvider>
  );
};

export default App;
