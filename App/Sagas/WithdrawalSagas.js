import { call, put } from 'redux-saga/effects'
import WithdrawalActions from '../Redux/WithdrawalRedux'

export function * postWithdrawal (api, action) {
  const { data } = action
  const response = yield call(api.postWithdrawal, data)
  if (response.ok) {
    yield put(WithdrawalActions.withdrawalSuccess(response.data))
  } else {
    yield put(WithdrawalActions.withdrawalFailure())
  }
}
