import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Normalize } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  wrapperContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profile: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10
  },
  avatar: {
    width: 75,
    height: 75,
    marginBottom: 20,
    borderRadius: 37.5
  },
  userAvatar: {
    borderColor: Colors.white,
    borderWidth: 2
  },
  title: {
    ...Fonts.FontMaker({ weight: 'Bold' }),
    fontSize: Normalize(Fonts.size.h5),
    color: 'black',
    marginBottom: 2
  }
})
