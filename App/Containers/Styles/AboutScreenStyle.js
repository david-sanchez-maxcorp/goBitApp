import { StyleSheet } from 'react-native'
import {
  ApplicationStyles,
  Metrics,
  Colors,
  Fonts,
  Normalize
} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginHorizontal: 10
  },
  image: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
    marginHorizontal: Metrics.baseMargin
  },
  textImage: {
    color: Colors.white,
    fontSize: Normalize(Fonts.size.h5),
    ...Fonts.FontMaker({ fontWeight: 'SemiBold' }),
    flex: 1
  },
  imageTextContainer: {
    backgroundColor: Colors.gradient1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 35,
    height: 70,
    marginVertical: Metrics.smallMargin,
    flex: 1,
    padding: 10
  },
  logoHeader: {
    alignItems: 'center'
  },
  bold: {
    fontWeight: '600'
  },
  textContainer: {
    backgroundColor: Colors.gradient2,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 35,
    padding: Metrics.doubleBaseMargin,
    marginVertical: Metrics.smallMargin
  },
  textContainerRow: {
    backgroundColor: Colors.gradient3,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 35,
    padding: Metrics.doubleBaseMargin,
    marginVertical: Metrics.smallMargin
  },
  imageLarge: {
    width: 70,
    height: 100,
    resizeMode: 'contain',
    marginHorizontal: Metrics.baseMargin
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Metrics.doubleBaseMargin,
    marginVertical: Metrics.smallMargin
  },
  imageFlex: {
    flex: 1,
    width: null,
    height: null
  },
  section: {
    marginTop: Metrics.doubleBaseMargin
  },
  text: {
    color: Colors.white,
    fontSize: Normalize(Fonts.size.regular),
    marginTop: Metrics.doubleBaseMargin,
    ...Fonts.FontMaker({ fontWeigth: 'SemiBold' })
  },
  description: {
    color: Colors.black,
    fontSize: Normalize(Fonts.size.regular),
    marginTop: Metrics.doubleBaseMargin,
    ...Fonts.FontMaker({ fontWeigth: 'SemiBold' })
  },
  welcomeTitleBold: {
    fontSize: Normalize(Fonts.size.h1),
    color: Colors.black,
    ...Fonts.FontMaker({ weight: 'Bold' })
  }
})
