import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Modal } from 'react-native'
import Spinner from 'react-native-spinkit'
import styles from './Styles/indexStyle'

export default class index extends Component {
  render () {
    return (
      <Modal
        animationType={'none'}
        transparent={true}
        visible={this.props.visible}
        onRequestClose={() => {}}
      >
        <View style={styles.overlay}>
          <View style={{ backgroundColor: 'transparent', opacity: 1 }}>
            <Spinner
              isVisible={this.props.visible}
              size={100}
              type="Wave"
              color={'#ffffff'}
            />
          </View>
        </View>
      </Modal>
    )
  }
}
