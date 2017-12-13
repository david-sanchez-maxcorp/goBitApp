import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  welcomeLogo: {
    alignItems: 'center',
    flex: 2,
    marginTop: Metrics.navBarHeight
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 21,
    ...Fonts.FontMaker({ weight: 'SemiBold' })
  },
  buttonStyle: { borderColor: 'white', borderWidth: 2 },
  sloganStyle: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h5,
    color: Colors.white,
    backgroundColor: Colors.transparent,
    marginTop: Metrics.baseMargin
  },
  buttonsContainer: { flex: 1, padding: 10 }
})
