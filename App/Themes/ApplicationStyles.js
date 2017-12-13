import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

const ApplicationStyles = {
  screen: {
    container: {
      flex: 1
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
    }
  }
}

export default ApplicationStyles
