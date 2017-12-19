import { call, put, select } from 'redux-saga/effects'
import UserInfoActions from '../Redux/UserInfoRedux'
import { LoginSelectors } from '../Redux/LoginRedux'

export function * getUserInfo (api, action) {
  const { id, access_token } = yield select(LoginSelectors.getData)
  const response = yield call(api.getUserInfo, {
    userID: id,
    token: access_token
  })

  if (response.ok) {
    yield put(UserInfoActions.userInfoSuccess(response.data))
  } else {
    yield put(UserInfoActions.userInfoFailure())
  }
}
