import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View } from 'react-native'
import { Card, Button, List, ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/StatisticsScreenStyle'

class StatisticsScreen extends Component {
  constructor (props) {
    super(props)

    this.navigateToIncomes = this.navigateToIncomes.bind(this)
    this.navigateToWithdrawals = this.navigateToWithdrawals.bind(this)
    this.navigateToComissions = this.navigateToComissions.bind(this)
  }

  navigateToIncomes () {
    this.props.navigation.navigate('IncomesScreen')
  }

  navigateToWithdrawals () {
    this.props.navigation.navigate('WithdrawalsScreen')
  }

  navigateToComissions () {
    this.props.navigation.navigate('ComissionsScreen')
  }

  render () {
    const buttons = [I18n.t('bitcoin')]

    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <List>
            <ListItem
              leftIcon={{ name: 'download', type: 'feather' }}
              title={I18n.t('incomes')}
              onPress={this.navigateToIncomes}
            />
            <ListItem
              leftIcon={{ name: 'upload', type: 'feather' }}
              title={I18n.t('withdrawals')}
              onPress={this.navigateToWithdrawals}
            />
            <ListItem
              leftIcon={{ name: 'dollar-bill', type: 'foundation' }}
              title={I18n.t('comissions')}
              onPress={this.navigateToComissions}
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

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsScreen)
