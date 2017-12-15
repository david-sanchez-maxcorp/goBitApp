import { call, put } from 'redux-saga/effects'
import RegisterActions from '../Redux/RegisterRedux'
import LoginActions from '../Redux/LoginRedux'
import { NavigationActions } from 'react-navigation'

function * createWallet (response, api) {
  yield call(api.postWallet, response.data.access_token)
}

function * verifyWallet (response, api) {
  const getWalletResponse = yield call(api.getWallet, response.data.uuid)
  if (getWalletResponse.ok) {
    if (getWalletResponse.data.status === 'fail') {
      yield call(createWallet, response, api)
    }
  }
}

export function * postRegister (api, action) {
  const { data } = action
  const response = yield call(api.postRegister, data)

  if (response.ok) {
    yield put(LoginActions.loginSuccess(response.data))
    yield put(RegisterActions.registerSuccess(response.data))

    yield call(verifyWallet, response, api)

    yield put(NavigationActions.navigate({ routeName: 'Main' }))
  } else {
    yield put(RegisterActions.registerFailure(response.data))
  }
}
