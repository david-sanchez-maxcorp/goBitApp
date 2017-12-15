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
import IncomeActions from '../Redux/IncomeRedux'
// import { IncomeSelectors } from '../Redux/IncomeRedux'

export function * postIncome (api, action) {
  const { data } = action
  const response = yield call(api.postIncome, data)

  if (response.ok) {
    yield put(IncomeActions.incomeSuccess(response.data))
  } else {
    yield put(IncomeActions.incomeFailure())
  }
}
