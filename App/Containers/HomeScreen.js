import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  View,
  Alert,
  Clipboard
} from 'react-native'
import { connect } from 'react-redux'
import { Card, Button, ButtonGroup } from 'react-native-elements'
import I18n from 'react-native-i18n'
import QRCode from 'react-native-qrcode'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      walletAddress: '2MxQnKr1gb29rMneDXKWMXyxceYn9k7FocW',
      selectedIndex: 0
    }

    this.writeToClipboard = this.writeToClipboard.bind(this)
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }

  writeToClipboard = async () => {
    await Clipboard.setString(this.state.walletAddress)
    Alert.alert(I18n.t('copied'), I18n.t('walletAddressCopied'))
  }

  render() {
    const buttons = [I18n.t('bitcoin')]
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={this.state.selectedIndex}
            buttons={buttons}
          />
          <Card title={I18n.t('balance')} titleStyle={styles.title}>
            <Text style={styles.mediumText}>{I18n.t('available')}</Text>
            <Text style={styles.largeText}>0 USD ≈</Text>
            <Text style={styles.smallText}>0.00000000 BTC</Text>
          </Card>
          <Card title={I18n.t('walletUpdatedTitle')} titleStyle={styles.title}>
            {this.state.walletAddress !== null && (
              <View style={styles.centered}>
                <QRCode
                  value={this.state.walletAddress}
                  size={200}
                  bgColor="black"
                  fgColor="white"
                />
              </View>
            )}
          </Card>
          <Card containerStyle={{ alignItems: 'center' }}>
            <Text style={styles.walletAddress}>{this.state.walletAddress}</Text>
          </Card>
          <Button
            icon={{
              name: 'copy',
              type: 'font-awesome'
            }}
            title={I18n.t('copyWalletAddress')}
            onPress={this.writeToClipboard}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
