import { call, put } from 'redux-saga/effects'
import BalanceActions from '../Redux/BalanceRedux'
// import { BalanceSelectors } from '../Redux/BalanceRedux'

export function * postBalance (api, action) {
  const { data } = action
  const response = yield call(api.postSummaryUser, data)

  if (response.ok) {
    yield put(BalanceActions.balanceSuccess(response.data))
  } else {
    yield put(BalanceActions.balanceFailure())
  }
}
