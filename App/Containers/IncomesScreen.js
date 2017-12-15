import React, { Component } from 'react'
import { ScrollView, Text, FlatList, View, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import { ListItem, List } from 'react-native-elements'
import NoItem from '../Components/NoItem'
import IncomeActions from '../Redux/IncomeRedux'
import OverlaySpinner from '../Components/OverlaySpinner'

// Styles
import styles from './Styles/IncomesScreenStyle'

class IncomesScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false,
      dataObjects: [
        {
          asigned_date: '12min ago',
          value: '1.512323',
          currency_name: 'BTC',
          comission_type: '',
          comission_status: 'normal'
        }
      ]
    }
    this.getUserInfo = this.getUserInfo.bind(this)
    this.renderList = this.renderList.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
    this.renderEmpty = this.renderEmpty.bind(this)
  }

  keyExtractor = (item, index) => index

  componentDidMount() {
    this.getUserInfo()
  }

  onRefresh() {
    this.getUserInfo()
  }

  getUserInfo() {
    this.setState({ refreshing: true })

    const { access_token } = this.props.loginState.payload

    Promise.all([this.props.incomeRequest(access_token)]).then(() => {
      this.setState({ refreshing: false })
    })
  }

  renderRow({ item, index }) {
    return (
      <ListItem
        roundAvatar
        key={index}
        title={item.comission_status}
        subtitle={item.asigned_date}
        rightTitle={`${item.value} ${item.currency_name}`}
        containerStyle={styles.listItemStyle}
        hideChevron
      />
    )
  }
  renderEmpty() {
    return (
      <NoItem
        iconName="download"
        type="feather"
        infoHeading={I18n.t('noIncomes')}
        infoParagraph={I18n.t('incomesParagraph')}
      />
    )
  }

  renderList() {
    const { payload } = this.props.incomeState

    return (
      <FlatList
        data={payload}
        renderItem={this.renderRow}
        initialNumToRender={20}
        ListEmptyComponent={this.renderEmpty}
        keyExtractor={this.keyExtractor}
      />
    )
  }

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }
        style={styles.container}
      >
        {this.renderList()}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    loginState: state.login,
    incomeState: state.income
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incomeRequest: accessToken =>
      dispatch(IncomeActions.incomeRequest(accessToken))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomesScreen)
