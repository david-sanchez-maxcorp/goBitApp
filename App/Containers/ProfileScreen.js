import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Image,
  View,
  RefreshControl
} from 'react-native'
import { Card, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import t from 'tcomb-form-native'
import Spinner from 'react-native-spinkit'

// Add Actions - replace 'Your' with whatever your reducer is called :)
import UserInfoActions from '../Redux/UserInfoRedux'
import UpdateInfoUserActions from '../Redux/UpdateInfoUserRedux'

// Styles
import styles from './Styles/ProfileScreenStyle'

let Form = t.form.Form

const Person = t.struct({
  name: t.String,
  last_name: t.String,
  email: t.String
})

const ChangePassword = t.struct({
  password: t.String,
  password_confirmation: t.String
})

const userOptions = {
  fields: {
    name: {
      label: I18n.t('firstName'),
      numberOfLines: 1,
      multiline: false
    },
    last_name: {
      label: I18n.t('lastName'),
      numberOfLines: 1,
      multiline: false
    },
    email: {
      label: I18n.t('email'),
      numberOfLines: 1,
      multiline: false,
      editable: false
    },
    sponsor: {
      label: I18n.t('sponsor'),
      numberOfLines: 1,
      multiline: false
    }
  }
}

class ProfileScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      refreshing: false
    }

    this.renderProfileImage = this.renderProfileImage.bind(this)
    this.getUserInfo = this.getUserInfo.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
    this.getUri = this.getUri.bind(this)
    this.handleUpdateUserInfo = this.handleUpdateUserInfo.bind(this)
  }

  componentDidMount () {
    this.getUserInfo()
  }

  getUri (url) {
    url = url.replace(/^http:\/\//i, 'https://')
    return { uri: url }
  }

  getUserInfo () {
    this.setState({ refreshing: true })

    Promise.all([this.props.userInfoRequest()]).then(() => {
      this.setState({ refreshing: false })
    })
  }

  handleUpdateUserInfo () {
    var value = this.refs.userForm.getValue()
    if (value) {
      this.props.updateInfoUserRequest(value)
    }
  }

  onRefresh () {
    this.getUserInfo()
  }

  renderProfileImage () {
    const { payload, fetching } = this.props.userInfoState
    if (payload) {
      return (
        <View>
          <Card title={payload.name} titleStyle={styles.title}>
            <View style={styles.profile}>
              <Image
                source={this.getUri(payload.avatar.small)}
                style={styles.avatar}
              />
            </View>
          </Card>
        </View>
      )
    } else {
      return (
        <View style={styles.centered}>
          <Spinner isVisible={fetching} size={50} type="Wave" color={'black'} />
        </View>
      )
    }
  }

  renderUserInfo () {
    const { payload, fetching } = this.props.userInfoState
    if (payload) {
      return (
        <Form
          ref="userForm"
          type={Person}
          value={this.props.userInfoState.payload}
          options={userOptions}
          onChange={this.onChange}
        />
      )
    } else {
      return (
        <View style={styles.centered}>
          <Spinner isVisible={fetching} size={50} type="Wave" color={'black'} />
        </View>
      )
    }
  }

  render () {
    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }
      >
        {this.renderProfileImage()}
        <Button
          containerViewStyle={styles.outerButton}
          title={I18n.t('uploadImage')}
          backgroundColor="#68B67C"
        />
        <Card title={I18n.t('userInformation')} titleStyle={styles.title}>
          {this.renderUserInfo()}
        </Card>
        <Button
          containerViewStyle={styles.outerButton}
          title={I18n.t('updateData')}
          backgroundColor="#68B67C"
          onPress={this.handleUpdateUserInfo}
        />

        <Card title={I18n.t('changePassword')} titleStyle={styles.title}>
          <Form ref="passForm" type={ChangePassword} onChange={this.onChange} />
        </Card>
        <Button
          containerViewStyle={styles.outerButton}
          title={I18n.t('updatePassword')}
          backgroundColor="#68B67C"
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    userInfoState: state.userInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userInfoRequest: () => dispatch(UserInfoActions.userInfoRequest()),
    updateInfoUserRequest: data =>
      dispatch(UpdateInfoUserActions.updateInfoUserRequest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
