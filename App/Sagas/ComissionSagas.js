import { call, put } from 'redux-saga/effects'
import ComissionActions from '../Redux/ComissionRedux'

export function * postComission (api, action) {
  const { data } = action
  const response = yield call(api.postComission, data)
  if (response.ok) {
    yield put(ComissionActions.comissionSuccess(response.data))
  } else {
    yield put(ComissionActions.comissionFailure())
  }
}
