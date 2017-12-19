import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Alert } from 'react-native'
import { connect } from 'react-redux'
import t from 'tcomb-form-native'
import I18n from 'react-native-i18n'
import { Card, Button } from 'react-native-elements'

// Add Actions - replace 'Your' with whatever your reducer is called :)
import ScannerActions from '../Redux/ScannerRedux'

// Styles
import styles from './Styles/WalletScreenStyle'

let Form = t.form.Form

// here we are: define your domain model
const Person = t.struct({
  to: t.String,
  amount: t.Number
})

const options = {
  fields: {
    to: {
      label: I18n.t('wallet'),
      placeholder: 'e.g.1LxM5YGneCurVtiBzkCEao',
      numberOfLines: 1,
      multiline: false
    },
    amount: {
      label: I18n.t('amount'),
      placeholder: 'e.g.0.0005'
    }
  }
}

class WalletScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: {
        to: null,
        amount: null
      }
    }
    this.goToScanner = this.goToScanner.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.scannerState.selectedWallet !== null) {
      Alert.alert(
        I18n.t('walletUpdatedTitle'),
        I18n.t('walletUpdatedDescription')
      )
      this.setState(
        {
          value: {
            to: nextProps.scannerState.selectedWallet,
            amount: null
          }
        },
        () => this.props.setSelectedWallet(null)
      )
    }
  }

  goToScanner () {
    this.props.navigation.navigate('ScannerScreen')
  }

  render () {
    const buttons = [I18n.t('bitcoin')]

    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <Card title={I18n.t('withdraw-pay')} titleStyle={styles.title}>
            <Form
              ref="form"
              type={Person}
              options={options}
              value={this.state.value}
            />
            <Button
              containerViewStyle={styles.scanButton}
              icon={{ name: 'qrcode', type: 'font-awesome' }}
              title={I18n.t('scanQrCode')}
              onPress={this.goToScanner}
            />
            <Button
              containerViewStyle={styles.sendButton}
              title={I18n.t('send')}
              backgroundColor="#68B67C"
            />
          </Card>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    scannerState: state.scanner
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSelectedWallet: wallet =>
      dispatch(ScannerActions.setSelectedWallet(wallet))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WalletScreen)
