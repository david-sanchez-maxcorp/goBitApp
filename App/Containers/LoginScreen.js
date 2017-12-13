import React, { Component } from 'react'
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  StatusBar,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import t from 'tcomb-form-native'
import I18n from 'react-native-i18n'
import Button from 'apsl-react-native-button'
import { Metrics, Images, Colors } from '../Themes/'
import GradientButton from '../Components/GradientButton'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

const Form = t.form.Form

import styles from './Styles/LoginScreenStyle'

const Person = t.struct({
  email: t.String, // a required string
  password: t.String // an optional string
})

const options = {
  auto: 'placeholders',
  fields: {}
}

class LoginScreen extends Component {
  constructor (props) {
    super(props)

    this.navigateToLogin = this.navigateToLogin.bind(this)
  }

  onSubmit () {
    var value = this.refs.form.getValue()
    if (value) {
      console.tron.log(value)
    }
  }

  navigateToLogin () {
    this.props.navigation.navigate('LoginScreen')
  }

  render () {
    let email = {
      placeholder: I18n.t('email'),
      autoCapitalize: 'none',
      autoCorrect: false,
      keyboardType: 'email-address'
    }

    let password = {
      placeholder: I18n.t('password'),
      maxLength: 12,
      secureTextEntry: true
    }

    options.fields['email'] = email
    options.fields['password'] = password
    const { navigate } = this.props.navigation

    return (
      <ScrollView style={[styles.container, { backgroundColor: 'white' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.statusBarColor}
        />
        <KeyboardAvoidingView behavior="position">
          <View style={[styles.centered, { flex: 1 }]}>
            <Image style={[styles.logo]} source={Images.asset16} />
          </View>
          <View style={styles.formContainer}>
            <Form ref="form" type={Person} options={options} />
            <GradientButton text={I18n.t('login')} onPress={() => {}} />
            <Button
              onPress={this.navigateToLogin}
              textStyle={styles.buttonTextStyle}
              style={styles.linkButton}
            >
              {I18n.t('signUp')}
            </Button>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
