import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'
import Normalize from '../Lib/normalize-text'
import { Platform } from 'react-native'

const ApplicationStyles = {
  screen: {
    container: {
      flex: 1,
      backgroundColor: '#F1F4F7'
    },
    logo: {
      height: 180,
      width: 180,
      resizeMode: 'contain'
    },
    centered: {
      alignItems: 'center'
    },
    formContainer: {
      flex: 1,
      backgroundColor: Colors.transparent,
      padding: Metrics.baseMargin
    },
    linkButton: {
      borderWidth: 0
    },
    errorLabel: {
      color: '#a94442',
      fontSize: 17,
      marginBottom: 7,
      fontWeight: '400'
    },
    outerButton: {
      marginRight: 15,
      marginLeft: 15
    },
    innerButton: {
      marginRight: 0,
      marginLeft: 0
    },
    listItemStyle: {
      backgroundColor: '#FFF'
    }
  },
  fonts: {
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
      color: Colors.textBold,
      marginTop: 10
    }
  }
}

export default ApplicationStyles
