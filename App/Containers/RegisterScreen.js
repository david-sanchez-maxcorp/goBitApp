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
import DebugConfig from '../Config/DebugConfig'
import { Metrics, Images, Colors } from '../Themes/'
import GradientButton from '../Components/GradientButton'
import RegisterActions from '../Redux/RegisterRedux'

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
    this.state = {
      value: {
        name: '',
        password: '',
        email: '',
        confirmPassword: ''
      }
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.renderError = this.renderError.bind(this)
    this.navigateToLogin = this.navigateToLogin.bind(this)
  }

  randomIntFromInterval (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  componentDidMount () {
    if (DebugConfig.ezSignup) {
      const randomNumber = this.randomIntFromInterval(0, 1000)
      const testName = `test${randomNumber}`
      this.props.registerRequest({
        name: testName,
        password: '123456',
        email: `${testName}@gmail.com`,
        confirmPassword: '123456'
      })
    }
  }

  onSubmit () {
    var value = this.refs.form.getValue()
    if (value) {
      this.props.registerRequest(value)
    }
  }

  onChange (value) {
    this.setState({ value })
  }

  renderError () {
    const { error } = this.props.registerState
    if (error) {
      let errorList = []
      for (const key in error) {
        let errorMessage = error[key][0]
        switch (errorMessage) {
          case 'has already been taken':
            errorMessage = I18n.t('emailError')
            break
          case 'Tu password debe contener minimo 6 caracteres':
            errorMessage = I18n.t('passwordLengthError')
            break
        }
        errorList.push(
          <Text style={styles.errorLabel} key={key}>
            {errorMessage}
          </Text>
        )
      }
      return errorList
    }
  }

  navigateToLogin () {
    this.props.navigation.navigate('LoginScreen')
  }

  render () {
    const { fetching } = this.props.registerState

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
            {this.renderError()}
            <Form ref="form" type={Person} options={options} />
            <GradientButton
              isLoading={fetching}
              text={I18n.t('signUp')}
              onPress={this.onSubmit}
            />
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
  return {
    registerState: state.register
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerRequest: user => dispatch(RegisterActions.registerRequest(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
