import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View } from 'react-native'
import {
  Card,
  Button,
  ButtonGroup,
  List,
  ListItem
} from 'react-native-elements'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/StatisticsScreenStyle'

class StatisticsScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedIndex: 0
    }

    this.updateIndex = this.updateIndex.bind(this)
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

  updateIndex (selectedIndex) {
    this.setState({ selectedIndex })
  }
  render () {
    const buttons = [I18n.t('bitcoin')]

    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={this.state.selectedIndex}
            buttons={buttons}
            containerStyle={styles.buttonGroupContainer}
          />
          <List>
            <ListItem
              title={I18n.t('incomes')}
              onPress={this.navigateToIncomes}
            />
            <ListItem
              title={I18n.t('withdrawals')}
              onPress={this.navigateToWithdrawals}
            />
            <ListItem
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
