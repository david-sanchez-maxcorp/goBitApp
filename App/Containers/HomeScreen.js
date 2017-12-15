import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  View,
  Alert,
  Clipboard,
  RefreshControl
} from 'react-native'
import { connect } from 'react-redux'
import { Card, Button } from 'react-native-elements'
import I18n from 'react-native-i18n'
import QRCode from 'react-native-qrcode'
import BalanceActions from '../Redux/BalanceRedux'
import WalletActions from '../Redux/WalletRedux'
import Spinner from 'react-native-spinkit'

import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false
    }

    this.writeToClipboard = this.writeToClipboard.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
    this.getUserInfo = this.getUserInfo.bind(this)
    this.renderBalance = this.renderBalance.bind(this)
    this.renderAddress = this.renderAddress.bind(this)
    this.renderCopyButton = this.renderCopyButton.bind(this)
  }

  componentDidMount() {
    this.getUserInfo()
  }

  getUserInfo() {
    this.setState({ refreshing: true })

    const { access_token, uuid } = this.props.loginState.payload

    Promise.all([
      this.props.balanceRequest(access_token),
      this.props.walletRequest(uuid)
    ]).then(() => {
      this.setState({ refreshing: false })
    })
  }

  onRefresh() {
    this.getUserInfo()
  }

  writeToClipboard = async () => {
    await Clipboard.setString(this.props.walletState.payload.address)
    Alert.alert(I18n.t('copied'), I18n.t('walletAddressCopied'))
  }

  renderBalance() {
    const { payload, fetching } = this.props.balanceState

    if (payload) {
      return (
        <View>
          <Text style={styles.mediumText}>{I18n.t('available')}</Text>
          <Text style={styles.largeText}>{payload.balance.toFixed(8)} BTC</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.centered}>
          <Spinner isVisible={fetching} size={50} type="Wave" color={'black'} />
        </View>
      )
    }
  }

  renderAddress() {
    const { payload, fetching } = this.props.walletState
    if (payload) {
      return (
        <View style={styles.centered}>
          <QRCode
            value={payload.address}
            size={200}
            bgColor="black"
            fgColor="white"
          />
          <Text style={styles.walletAddress}>{payload.address}</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.centered}>
          <Spinner isVisible={fetching} size={50} type="Wave" color={'black'} />
        </View>
      )
    }
  }

  renderCopyButton() {
    const { payload, fetching } = this.props.walletState
    if (payload) {
      return (
        <Button
          icon={{
            name: 'copy',
            type: 'font-awesome'
          }}
          title={I18n.t('copyWalletAddress')}
          onPress={this.writeToClipboard}
          containerViewStyle={styles.outerButton}
        />
      )
    }
  }

  render() {
    const buttons = [I18n.t('bitcoin')]
    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }
      >
        <KeyboardAvoidingView behavior="position">
          <Card title={I18n.t('balance')} titleStyle={styles.title}>
            {this.renderBalance()}
          </Card>

          <Card title={I18n.t('walletUpdatedTitle')} titleStyle={styles.title}>
            {this.renderAddress()}
          </Card>
          {this.renderCopyButton()}
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    loginState: state.login,
    balanceState: state.balance,
    walletState: state.wallet
  }
}

const mapDispatchToProps = dispatch => {
  return {
    balanceRequest: access_token =>
      dispatch(BalanceActions.balanceRequest(access_token)),
    walletRequest: uuid => dispatch(WalletActions.walletRequest(uuid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
