import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import t from 'tcomb-form-native'
import I18n from 'react-native-i18n'
import { Card, Button } from 'react-native-elements'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

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
              backgroundColor="#62B9BA"
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
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(WalletScreen)
