import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Image,
  StatusBar
} from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Images, Colors } from '../Themes'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AboutScreenStyle'

class AboutScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.logoHeader}>
          <Image style={styles.logo} source={Images.asset16} />
        </View>
        <ScrollView
          style={[styles.marginContainer, { marginTop: 0, paddingTop: 0 }]}
        >
          <Text style={styles.welcomeTitleBold}>
            {I18n.t('aboutUsScreen-benefits-title')}
          </Text>
          <Text style={styles.description}>
            {I18n.t('aboutUsScreen-benefits-text')}
          </Text>
          <View style={[styles.imageTextContainer, styles.section]}>
            <Image style={styles.image} source={Images.asset4} />
            <Text style={styles.textImage}>
              {I18n.t('aboutUsScreen-cloudStorage')}
            </Text>
          </View>
          <View style={styles.imageTextContainer}>
            <Image style={styles.image} source={Images.asset5} />
            <Text style={styles.textImage}>
              {I18n.t('aboutUsScreen-instantSaving')}
            </Text>
          </View>
          <View style={styles.imageTextContainer}>
            <Image style={styles.image} source={Images.asset6} />
            <Text style={styles.textImage}>
              {I18n.t('aboutUsScreen-scamProof')}
            </Text>
          </View>
          <Text style={[styles.welcomeTitleBold, styles.section]}>
            {I18n.t('aboutUsScreen-aboutUs-title')}
          </Text>
          <Text style={styles.description}>
            {I18n.t('aboutUsScreen-aboutUs-text')}
          </Text>
          <View style={[styles.textContainer, styles.section]}>
            <Image style={styles.image} source={Images.asset7} />
            <Text style={styles.textImage}>
              {I18n.t('aboutUsScreen-advertising-title')}
            </Text>
            <Text style={styles.text}>
              {I18n.t('aboutUsScreen-advertising-text')}
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Image style={styles.image} source={Images.asset8} />
            <Text style={styles.textImage}>
              {I18n.t('aboutUsScreen-trading-title')}
            </Text>
            <Text style={styles.text}>
              {I18n.t('aboutUsScreen-trading-text')}
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Image style={styles.image} source={Images.asset10} />
            <Text style={styles.textImage}>
              {I18n.t('aboutUsScreen-referrals-title')}
            </Text>
            <Text style={styles.text}>
              {I18n.t('aboutUsScreen-referrals-text')}
            </Text>
          </View>
          <Text style={[styles.welcomeTitleBold, styles.section]}>
            {I18n.t('slogan')}
          </Text>
          <Text style={styles.description}>{I18n.t('sloganIntroduction')}</Text>
          <View style={styles.textContainerRow}>
            <Image style={styles.imageLarge} source={Images.asset11} />
            <View style={styles.container}>
              <Text style={styles.textImage}>
                {I18n.t('aboutUsScreen-willWin-title')}
              </Text>
              <Text style={styles.text}>
                {I18n.t('aboutUsScreen-oportunities')}
              </Text>
            </View>
          </View>
          <View style={styles.textContainerRow}>
            <Image style={styles.imageLarge} source={Images.asset12} />
            <View style={styles.container}>
              <Text style={styles.textImage}>
                {I18n.t('aboutUsScreen-willWin-title')}
              </Text>
              <Text style={styles.text}>{I18n.t('aboutUsScreen-convert')}</Text>
            </View>
          </View>
        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen)
