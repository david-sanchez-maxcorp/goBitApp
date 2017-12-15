import { StyleSheet, Dimensions } from 'react-native'
import { Normalize } from '../../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  alignContainers: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 150
  },
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoHeadingStyle: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: Normalize(25),
    color: 'black'
  },
  infoParagraphStyle: {
    textAlign: 'center',
    padding: 10,
    fontSize: Normalize(16),
    color: '#888',
    width: Dimensions.get('window').width / 1.75
  },
  textStyle: {
    fontSize: Normalize(20)
  }
})
