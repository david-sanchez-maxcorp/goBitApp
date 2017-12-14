/************************************************************
 * A short word on how to use this automagically generated file.
 * We're often asked in the ignite gitter channel how to connect
 * to a to a third party api, so we thought we'd demonstrate - but
 * you should know you can use sagas for other flow control too.
 *
 * Other points:
 *  - You'll need to add this saga to sagas/index.js
 *  - This template uses the api declared in sagas/index.js, so
 *    you'll need to define a constant in that file.
 *************************************************************/

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
  // make the call to the api
  const response = yield call(api.postRegister, data)

  // success?
  if (response.ok) {
    yield put(LoginActions.loginSuccess(response.data))
    yield put(RegisterActions.registerSuccess(response.data))

    yield call(verifyWallet, response, api)
    // console.torn.log(verifyWalletResponse)

    yield put(NavigationActions.navigate({ routeName: 'Main' }))
  } else {
    yield put(RegisterActions.registerFailure(response.data))
  }
}
