import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors, Normalize } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  smallText: {
    ...Fonts.FontMaker({ weight: 'Regular' }),
    fontSize: Normalize(Fonts.size.h6),
    color: Colors.textBold
  },
  mediumText: {
    ...Fonts.FontMaker({ weight: 'Bold' }),
    fontSize: Normalize(Fonts.size.h5),
    color: Colors.textBold
  },
  largeText: {
    ...Fonts.FontMaker({ weight: 'Bold' }),
    fontSize: Normalize(Fonts.size.h4),
    color: Colors.color1
  },
  title: {
    textAlign: 'left',
    ...Fonts.FontMaker({ weight: 'Regular' }),
    fontSize: Normalize(Fonts.size.h5)
  },
  walletAddress: {
    ...Fonts.FontMaker({ weight: 'Regular' }),
    fontSize: Normalize(Fonts.size.small),
    color: Colors.textBold
  }
})
