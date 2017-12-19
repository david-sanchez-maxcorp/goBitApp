// a library to wrap and simplify api calls
import apisauce from 'apisauce'

let baseURL = 'http://api.gobit.co/v1/'

if (__DEV__) {
  baseURL = 'http://192.168.1.36:3000/v1/'
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

  const postIncome = token =>
    api.post('stats/deposit', {}, { headers: { token } })

  const postWithdrawal = token =>
    api.post('payments/user', {}, { headers: { token } })

  const postComission = token =>
    api.post('stats/comissions', {}, { headers: { token } })

  return {
    postlogin,
    postRegister,
    postSummaryUser,
    getWallet,
    postWallet,
    postIncome,
    postWithdrawal,
    postComission
  }
}

export default {
  create
}
