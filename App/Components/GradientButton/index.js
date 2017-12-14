import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native'
import styles from './Styles/indexStyle'
import LinearGradient from 'react-native-linear-gradient'
import Button from 'apsl-react-native-button'

export default class index extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    isLoading: PropTypes.bool
  }

  render() {
    const { onPress, text, isLoading } = this.props
    return (
      <Button
        onPress={onPress}
        style={styles.buttonStyle}
        isLoading={isLoading}
      >
        <LinearGradient
          colors={['#62B9BA', '#65BA88', '#66BB57']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={styles.linearGradient}
        >
          <Text style={styles.buttonText}>{text}</Text>
        </LinearGradient>
      </Button>
    )
  }
}
