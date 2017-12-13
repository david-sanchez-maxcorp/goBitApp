import { StackNavigator } from "react-navigation";
import WelcomeScreen from "../Containers/WelcomeScreen";
import LaunchScreen from "../Containers/LaunchScreen";
import LoginScreen from "../Containers/LoginScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    WelcomeScreen: { screen: WelcomeScreen },
    LaunchScreen: { screen: LaunchScreen },
    LoginScreen: { screen: LoginScreen }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "LoginScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
