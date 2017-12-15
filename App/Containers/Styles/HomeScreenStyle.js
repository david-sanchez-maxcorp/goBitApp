import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.fonts,
  copyButton: {
    marginRight: 0,
    marginLeft: 0
  }
})
