import { call, put } from 'redux-saga/effects'
import IncomeActions from '../Redux/IncomeRedux'

export function * postIncome (api, action) {
  const { data } = action
  const response = yield call(api.postIncome, data)

  if (response.ok) {
    yield put(IncomeActions.incomeSuccess(response.data))
  } else {
    yield put(IncomeActions.incomeFailure())
  }
}
