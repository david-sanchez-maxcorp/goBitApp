import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Card, Button, List, ListItem } from 'react-native-elements'
import I18n from 'react-native-i18n'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SettingsScreenStyle'

class SettingsScreen extends Component {
  constructor (props) {
    super(props)

    this.navigateToPrivacyPolicy = this.navigateToPrivacyPolicy.bind(this)
    this.navigateToAbout = this.navigateToAbout.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  navigateToPrivacyPolicy () {
    this.props.navigation.navigate('PrivacyPolicyScreen')
  }

  navigateToAbout () {
    this.props.navigation.navigate('AboutScreen')
  }

  handleSignOut () {
    this.props.navigation.navigate('WelcomeScreen')
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <List>
            <ListItem
              title={I18n.t('privacyPolicy')}
              onPress={this.navigateToPrivacyPolicy}
            />
            <ListItem
              title={I18n.t('aboutGobit')}
              onPress={this.navigateToAbout}
            />
          </List>
          <List>
            <ListItem
              title={I18n.t('signOut')}
              titleStyle={{ color: 'red' }}
              onPress={this.handleSignOut}
              hideChevron
            />
          </List>
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
