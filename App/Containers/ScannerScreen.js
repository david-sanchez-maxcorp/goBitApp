import React, { Component } from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Alert,
  Vibration,
  Platform
} from 'react-native'
import Camera from 'react-native-camera'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import ScannerActions from '../Redux/ScannerRedux'

// Styles
import styles from './Styles/ScannerScreenStyle'

class ScannerScreen extends Component {
  constructor(props) {
    super(props)
    this._onBarCodeRead = this._onBarCodeRead.bind(this)
    this.onBarCodeRead = this.onBarCodeRead.bind(this)

    this.state = {
      onBarCodeRead: true
    }
  }

  componentWillMount() {
    this.setState({ onBarCodeRead: true })
  }

  componentWillUnmount() {
    this.setState({ onBarCodeRead: false })
  }

  _onBarCodeRead = data => {
    if (this.state.onBarCodeRead) {
      this.componentWillUnmount()
      this.onBarCodeRead(data)
      setTimeout(() => {
        this.componentWillMount()
      }, 3000)
    }
  }

  onBarCodeRead(e) {
    if (e != null) {
      let code = e.data
      if (Platform.OS === 'ios') {
        Vibration.vibrate(500, false)
      } else {
        Vibration.vibrate([0, 500], false)
      }
      this.props.navigation.goBack()
      this.props.setSelectedWallet(code)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={cam => {
            this.camera = cam
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          cameraType="back"
          onBarCodeRead={this._onBarCodeRead}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    setSelectedWallet: wallet =>
      dispatch(ScannerActions.setSelectedWallet(wallet))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScannerScreen)
