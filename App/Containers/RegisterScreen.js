import React, { Component } from 'react'
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
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

import styles from './Styles/RegisterScreenStyle'

const samePasswords = x => {
  return x.password === x.password_confirmation
}

// here we are: define your domain model
const Person = t.subtype(
  t.struct({
    name: t.String, // a required string
    password: t.String, // an optional string
    password_confirmation: t.String,
    email: t.String
  }),
  samePasswords
)

Person.getValidationErrorMessage = function (value) {
  if (!samePasswords(value)) {
    return I18n.t('passwordMatch')
  }
}

const options = {
  auto: 'placeholders',
  fields: {},
  order: ['email', 'name', 'password', 'password_confirmation']
} // optional rendering options (see documentation)

class RegisterScreen extends Component {
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
    let name = {
      placeholder: I18n.t('fullName'),
      maxLength: 20
    }

    let password = {
      placeholder: I18n.t('password'),
      minLength: 6,
      secureTextEntry: true
    }

    let confirmPassword = {
      placeholder: I18n.t('confirmPassword'),
      minLength: 6,
      secureTextEntry: true
    }

    let email = {
      placeholder: I18n.t('email'),
      autoCapitalize: 'none',
      autoCorrect: false,
      keyboardType: 'email-address'
    }

    options.fields['username'] = name
    options.fields['password'] = password
    options.fields['password_confirmation'] = confirmPassword
    options.fields['email'] = email

    return (
      <ScrollView style={[styles.container, { backgroundColor: 'white' }]}>
        <KeyboardAvoidingView behavior="position">
          <View style={[styles.centered, { flex: 1 }]}>
            <Image style={[styles.logo]} source={Images.asset16} />
          </View>
          <View style={styles.formContainer}>
            <Form ref="form" type={Person} options={options} />
            <GradientButton text={I18n.t('signUp')} onPress={() => {}} />
            <Button
              onPress={this.navigateToLogin}
              textStyle={styles.buttonTextStyle}
              style={styles.linkButton}
            >
              {I18n.t('login')}
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
