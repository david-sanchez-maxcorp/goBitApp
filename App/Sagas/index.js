import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { LoginTypes } from '../Redux/LoginRedux'
import { RegisterTypes } from '../Redux/RegisterRedux'
import { BalanceTypes } from '../Redux/BalanceRedux'
import { WalletTypes } from '../Redux/WalletRedux'
import { IncomeTypes } from '../Redux/IncomeRedux'
import { WithdrawalTypes } from '../Redux/WithdrawalRedux'
import { ComissionTypes } from '../Redux/ComissionRedux'
import { UserInfoTypes } from '../Redux/UserInfoRedux'
import { UpdateInfoUserTypes } from '../Redux/UpdateInfoUserRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { postLogin } from './LoginSagas'
import { postRegister } from './RegisterSagas'
import { postBalance } from './BalanceSagas'
import { getWallet } from './WalletSagas'
import { postIncome } from './IncomeSagas'
import { postWithdrawal } from './WithdrawalSagas'
import { postComission } from './ComissionSagas'
import { getUserInfo } from './UserInfoSagas'
import { putUpdateInfoUser } from './UpdateInfoUserSagas'

/* ------------- API ------------- */

const api = API.create()

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(LoginTypes.LOGIN_REQUEST, postLogin, api),
    takeLatest(RegisterTypes.REGISTER_REQUEST, postRegister, api),
    takeLatest(BalanceTypes.BALANCE_REQUEST, postBalance, api),
    takeLatest(WalletTypes.WALLET_REQUEST, getWallet, api),
    takeLatest(IncomeTypes.INCOME_REQUEST, postIncome, api),
    takeLatest(WithdrawalTypes.WITHDRAWAL_REQUEST, postWithdrawal, api),
    takeLatest(ComissionTypes.COMISSION_REQUEST, postComission, api),
    takeLatest(UserInfoTypes.USER_INFO_REQUEST, getUserInfo, api),
    takeLatest(
      UpdateInfoUserTypes.UPDATE_INFO_USER_REQUEST,
      putUpdateInfoUser,
      api
    )
  ])
}
