import { call, put } from 'redux-saga/effects'
import WalletActions from '../Redux/WalletRedux'

export function * getWallet (api, action) {
  const { data } = action
  const response = yield call(api.getWallet, data)

  if (response.ok) {
    yield put(WalletActions.walletSuccess(response.data.data.balances[0]))
  } else {
    yield put(WalletActions.walletFailure())
  }
}
