import { StackNavigator } from "react-navigation";
import WelcomeScreen from "../Containers/WelcomeScreen";
import LaunchScreen from "../Containers/LaunchScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    WelcomeScreen: { screen: WelcomeScreen },
    LaunchScreen: { screen: LaunchScreen }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "WelcomeScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
