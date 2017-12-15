import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './Styles/indexStyle'
import { Icon } from 'react-native-elements'

export default class index extends Component {
  // // Prop type warnings
  static propTypes = {
    infoHeading: PropTypes.string.isRequired,
    infoParagraph: PropTypes.string.isRequired
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render() {
    return (
      <View style={styles.alignContainers}>
        <View style={styles.containerStyle}>
          <Icon
            name={this.props.iconName}
            size={64}
            color="#888"
            type={this.props.type}
          />
          <Text style={styles.infoHeadingStyle}>{this.props.infoHeading}</Text>
          <Text style={styles.infoParagraphStyle}>
            {this.props.infoParagraph}
          </Text>
        </View>
      </View>
    )
  }
}
