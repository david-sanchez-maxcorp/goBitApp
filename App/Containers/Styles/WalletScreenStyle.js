import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.fonts,
  scanButton: { marginRight: 0, marginLeft: 0 },
  sendButton: {
    marginRight: 0,
    marginLeft: 0,
    marginTop: 10
  }
})
