import { call, put, select } from 'redux-saga/effects'
import UpdateInfoUserActions from '../Redux/UpdateInfoUserRedux'
import { LoginSelectors } from '../Redux/LoginRedux'

export function * putUpdateInfoUser (api, action) {
  const { data } = action
  const { user } = yield select(LoginSelectors.getData)
  const response = yield call(api.putUserInfo, user.id, JSON.stringify(data))

  if (response.ok) {
    yield put(UpdateInfoUserActions.updateInfoUserSuccess(response.data))
  } else {
    yield put(UpdateInfoUserActions.updateInfoUserFailure())
  }
}
