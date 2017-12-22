import { call, put } from 'redux-saga/effects'
import RegisterActions from '../Redux/RegisterRedux'
import LoginActions from '../Redux/LoginRedux'
import { NavigationActions } from 'react-navigation'

function * createWallet (token, api) {
  yield call(api.postWallet, token)
}

function * verifyWallet (response, api) {
  const { auth_token, user } = response.data
  const getWalletResponse = yield call(api.getWallet, user.uuid)
  if (getWalletResponse.ok) {
    if (getWalletResponse.data.status === 'fail') {
      yield call(createWallet, auth_token, api)
    }
  }
}

export function * postRegister (api, action) {
  const { data } = action
  const response = yield call(api.postRegister, data)

  if (response.ok) {
    yield call(api.setHeader, response.data.auth_token)
    yield put(LoginActions.loginSuccess(response.data))
    yield put(RegisterActions.registerSuccess(response.data))

    yield call(verifyWallet, response, api)

    yield put(NavigationActions.navigate({ routeName: 'Main' }))
  } else {
    yield put(RegisterActions.registerFailure(response.data))
  }
}
