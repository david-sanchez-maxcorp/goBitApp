import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Image,
  View
} from 'react-native'
import { Card, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import t from 'tcomb-form-native'
let Form = t.form.Form
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileScreenStyle'

const Person = t.struct({
  firstName: t.String,
  lastName: t.String,
  email: t.String,
  sponsor: t.String
})

const ChangePassword = t.struct({
  password: t.String,
  newPassword: t.String
})

class ProfileScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: {
        firstName: null,
        lastName: null,
        email: null,
        sponsor: null
      }
    }
  }

  getUserUri () {
    return { uri: 'https://api.gobit.co/Img/anon_user.png' }
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <Card title="David Camilo" titleStyle={styles.title}>
            <View style={styles.profile}>
              <Image source={this.getUserUri()} style={styles.avatar} />
            </View>
          </Card>
          <Button
            containerViewStyle={styles.outerButton}
            title={I18n.t('uploadImage')}
            backgroundColor="#68B67C"
          />
          <Card title={I18n.t('userInformation')} titleStyle={styles.title}>
            <Form ref="form" type={Person} value={this.state.value} />
          </Card>
          <Button
            containerViewStyle={styles.outerButton}
            title={I18n.t('updateData')}
            backgroundColor="#68B67C"
          />

          <Card title={I18n.t('changePassword')} titleStyle={styles.title}>
            <Form ref="form" type={ChangePassword} value={this.state.value} />
          </Card>
          <Button
            containerViewStyle={styles.outerButton}
            title={I18n.t('updatePassword')}
            backgroundColor="#68B67C"
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
