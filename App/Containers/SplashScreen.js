import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SplashScreenStyle'

class SplashScreen extends Component {
  componentDidMount () {
    setTimeout(() => {
      this.props.navigation.navigate('WelcomeScreen')
    }, 1000)
  }

  render () {
    return (
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Images.asset16} />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
