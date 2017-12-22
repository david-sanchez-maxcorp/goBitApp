import { call, put, select } from 'redux-saga/effects'
import WalletActions from '../Redux/WalletRedux'
import { LoginSelectors } from '../Redux/LoginRedux'

export function * getWallet (api, action) {
  const { user } = yield select(LoginSelectors.getData)
  const response = yield call(api.getWallet, user.uuid)

  if (response.ok) {
    yield put(WalletActions.walletSuccess(response.data))
  } else {
    yield put(WalletActions.walletFailure())
  }
}
