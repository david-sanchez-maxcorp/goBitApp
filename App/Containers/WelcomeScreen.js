import React, { Component } from "react";
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  StatusBar,
  View,
  Image
} from "react-native";
import Button from "apsl-react-native-button";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import { Metrics, Images, Colors } from "../Themes/";
import styles from "./Styles/WelcomeScreenStyle";
import I18n from "react-native-i18n";

class WelcomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <LinearGradient
        colors={["#66BB57", "#65BA88", "#62B9BA"]}
        style={styles.container}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.secondaryColor}
        />
        <View style={styles.welcomeLogo}>
          <Image style={[styles.logo]} source={Images.asset17} />
          <Text style={styles.sloganStyle}>{I18n.t("slogan")}</Text>
        </View>
        <View style={{ flex: 1, padding: 10 }}>
          <Button
            onPress={() => navigate("RegisterScreen")}
            textStyle={styles.buttonTextStyle}
            style={styles.buttonStyle}
          >
            {I18n.t("signIn")}
          </Button>
          <Button
            onPress={() => navigate("LoginScreen")}
            textStyle={styles.buttonTextStyle}
            style={styles.buttonStyle}
          >
            {I18n.t("login")}
          </Button>
        </View>
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
