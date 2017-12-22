// a library to wrap and simplify api calls
import apisauce from 'apisauce'

let baseURL = 'https://2aa70366.ngrok.io/v1/'

if (__DEV__) {
  baseURL = 'http://192.168.1.18:3000/v1/'
}

const create = () => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })

  const setHeader = token => api.setHeader('Authorization', token)

  const postlogin = user => api.post('login', user)

  const postRegister = user => api.post('users', user)

  const postSummaryUser = () => api.post('summary/user')

  const getWallet = userUUID => api.get(`wallet/${userUUID}`)

  const postWallet = () => api.post('wallets')

  const postIncome = () => api.post('stats/deposit')

  const postWithdrawal = () => api.post('payments/user')

  const postComission = () => api.post('stats/comissions')

  const getUserInfo = userID => api.get(`users/${userID}`)

  const putUserInfo = (userID, user) => api.put(`users/${userID}`, user)

  return {
    postlogin,
    postRegister,
    postSummaryUser,
    getWallet,
    postWallet,
    postIncome,
    postWithdrawal,
    postComission,
    getUserInfo,
    putUserInfo,
    setHeader
  }
}

export default {
  create
}
