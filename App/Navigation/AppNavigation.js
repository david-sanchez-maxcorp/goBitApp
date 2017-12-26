import React from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'
import I18n from 'react-native-i18n'
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  NavigationActions
} from 'react-navigation'
import ScannerScreen from '../Containers/ScannerScreen'
import AboutScreen from '../Containers/AboutScreen'
import PrivacyPolicyScreen from '../Containers/PrivacyPolicyScreen'
import ComissionsScreen from '../Containers/ComissionsScreen'
import WithdrawalsScreen from '../Containers/WithdrawalsScreen'
import IncomesScreen from '../Containers/IncomesScreen'
import ProfileScreen from '../Containers/ProfileScreen'
import SettingsScreen from '../Containers/SettingsScreen'
import StatisticsScreen from '../Containers/StatisticsScreen'
import WalletScreen from '../Containers/WalletScreen'
import HomeScreen from '../Containers/HomeScreen'
import WelcomeScreen from '../Containers/WelcomeScreen'
import LoginScreen from '../Containers/LoginScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import SplashScreen from '../Containers/SplashScreen'
import { Colors } from '../Themes'

const HomeStackNavigator = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: I18n.t('Gobit')
      }
    }
  },
  {
    headerMode: 'screen'
  }
)

const WalletStackNavigator = StackNavigator(
  {
    WalletScreen: {
      screen: WalletScreen,
      navigationOptions: {
        headerTitle: I18n.t('wallet')
      }
    },
    ScannerScreen: {
      screen: ScannerScreen,
      navigationOptions: {
        headerTitle: I18n.t('codeReaderScreen-title')
      }
    }
  },
  {
    headerMode: 'screen'
  }
)

const StatisticsStackNavigator = StackNavigator(
  {
    StatisticsScreen: {
      screen: StatisticsScreen,
      navigationOptions: {
        headerTitle: I18n.t('statistics')
      }
    },
    IncomesScreen: {
      screen: IncomesScreen,
      navigationOptions: {
        headerTitle: I18n.t('incomes')
      }
    },
    WithdrawalsScreen: {
      screen: WithdrawalsScreen,
      navigationOptions: {
        headerTitle: I18n.t('withdrawals')
      }
    },
    ComissionsScreen: {
      screen: ComissionsScreen,
      navigationOptions: {
        headerTitle: I18n.t('comissions')
      }
    }
  },
  {
    initialRouteName: 'StatisticsScreen',
    headerMode: 'screen'
  }
)

const ProfileStackNavigator = StackNavigator(
  {
    UserScreen: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: I18n.t('profile'),
        headerRight: (
          <View style={{ paddingRight: 10 }}>
            <Icon
              containerStyle={{
                justifyContent: 'center',
                alignItems: 'center'
              }}
              color="black"
              name="settings"
              type="ionicons"
              size={25}
              onPress={() => navigation.navigate('SettingsScreen')}
            />
          </View>
        )
      })
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: {
        headerTitle: I18n.t('settingsScreen-title')
      }
    },
    PrivacyPolicyScreen: {
      screen: PrivacyPolicyScreen,
      navigationOptions: {
        headerTitle: I18n.t('privacyPolicy')
      }
    },
    AboutScreen: {
      screen: AboutScreen,
      navigationOptions: {
        headerTitle: I18n.t('aboutGobit')
      }
    }
  },
  {
    initialRouteName: 'UserScreen',
    headerMode: 'screen'
  }
)

const MainTabNavigator = TabNavigator(
  {
    HomeScreen: {
      screen: HomeStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            color={tintColor}
            name="tachometer"
            type="font-awesome"
            size={33}
          />
        )
      }
    },
    WalletScreen: {
      screen: WalletStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            color={tintColor}
            name="wallet"
            type="simple-line-icon"
            size={33}
          />
        )
      }
    },
    StatisticsScreen: {
      screen: StatisticsStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            color={tintColor}
            name="chart-line"
            size={33}
            type="material-community"
          />
        )
      }
    },
    ProfileScreen: {
      screen: ProfileStackNavigator,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            color={tintColor}
            name="user"
            size={33}
            type="feather"
          />
        )
      })
    }
  },
  {
    initialRouteName: 'ProfileScreen',
    lazy: false,
    animationEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: false,
      activeTintColor: Colors.secondaryColor,
      inactiveTintColor: Colors.grey,
      style: {
        backgroundColor: Colors.alabaster
      }
    },
    tabBarComponent: ({ jumpToIndex, ...props }) => (
      <TabBarBottom
        {...props}
        jumpToIndex={index => {
          const { dispatch, state } = props.navigation

          if (state.index === index && state.routes[index].routes.length > 1) {
            const stackRouteName = [
              'HomeScreen',
              'WalletScreen',
              'StatisticsScreen',
              'ProfileScreen'
            ][index]

            dispatch(
              NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: stackRouteName })
                ]
              })
            )
          } else {
            jumpToIndex(index)
          }
        }}
      />
    )
  }
)

const AuthStack = StackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    WelcomeScreen: {
      screen: WelcomeScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    RegisterScreen: {
      screen: RegisterScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    Main: {
      screen: MainTabNavigator,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    }
  },
  {
    initialRouteName: 'WelcomeScreen',
    headerMode: 'main'
  }
)

export default AuthStack
