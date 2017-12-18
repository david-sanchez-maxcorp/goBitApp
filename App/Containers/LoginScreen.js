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
import LoginActions from '../Redux/LoginRedux'
import { Metrics, Images, Colors } from '../Themes/'
import GradientButton from '../Components/GradientButton'
import OverLaySpinner from '../Components/OverlaySpinner'
import DebugConfig from '../Config/DebugConfig'
import styles from './Styles/LoginScreenStyle'

const Form = t.form.Form

const Person = t.struct({
  email: t.String,
  password: t.String
})

const options = {
  auto: 'placeholders',
  fields: {}
}

class LoginScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: {
        email: 'deividsanchez96@gmail.com',
        password: '123456'
      }
    }
    this.navigateToRegister = this.navigateToRegister.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {
    if (DebugConfig.ezLogin) {
      this.setState(
        {
          value: {
            email: 'deividsanchez96@test.com',
            password: '123456'
          }
        },
        this.onSubmit
      )
    }
  }

  onChange (value) {
    console.tron.log(value)
    this.setState({ value })
  }

  onSubmit () {
    var value = this.refs.form.getValue()
    if (value) {
      this.props.loginRequest(value)
    }
  }

  navigateToRegister () {
    this.props.navigation.navigate('RegisterScreen')
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

    const { fetching, error } = this.props.loginState

    return (
      <ScrollView style={[styles.container, { backgroundColor: 'white' }]}>
        <OverLaySpinner visible={fetching} />
        <KeyboardAvoidingView behavior="position">
          <View style={styles.centered}>
            <Image style={[styles.logo]} source={Images.asset16} />
          </View>
          <View style={styles.formContainer}>
            {error && (
              <Text style={styles.errorLabel}>{I18n.t('loginError')}</Text>
            )}
            <Form
              ref="form"
              type={Person}
              options={options}
              value={this.state.value}
              onChange={this.onChange}
            />
            <GradientButton
              text={I18n.t('login')}
              onPress={this.onSubmit}
              isLoading={fetching}
            />
            <Button
              onPress={this.navigateToRegister}
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
  return {
    loginState: state.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: user => dispatch(LoginActions.loginRequest(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
