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

import { call, put, select } from 'redux-saga/effects'
import UpdateInfoUserActions from '../Redux/UpdateInfoUserRedux'
import { LoginSelectors } from '../Redux/LoginRedux'

export function * putUpdateInfoUser (api, action) {
  const { data } = action
  const { id, access_token } = yield select(LoginSelectors.getData)
  const response = yield call(api.putUserInfo, {
    userID: id,
    token: access_token,
    user: JSON.stringify(data)
  })

  if (response.ok) {
    yield put(UpdateInfoUserActions.updateInfoUserSuccess(response.data))
  } else {
    yield put(UpdateInfoUserActions.updateInfoUserFailure())
  }
}
