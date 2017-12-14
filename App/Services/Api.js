// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import Secrets from 'react-native-config'
import { Platform } from 'react-native'

let baseURL = Secrets.API_URL

if (__DEV__) {
  baseURL =
    Platform.OS === 'ios'
      ? 'http://localhost:3000/v1/'
      : 'http://10.0.2.2:3000/v1/'
}

const create = () => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })

  const postlogin = user => api.post('login', user)

  const postRegister = user => api.post('users', user)

  const postSummaryUser = token =>
    api.post('summary/user', {}, { headers: { token } })

  const getWallet = userUUID => api.get(`wallet/${userUUID}`, {})

  const postWallet = token => api.post('wallets', {}, { headers: { token } })

  return {
    postlogin,
    postRegister,
    postSummaryUser,
    getWallet,
    postWallet
  }
}

export default {
  create
}
