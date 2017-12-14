import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { LoginTypes } from '../Redux/LoginRedux'
import { RegisterTypes } from '../Redux/RegisterRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { postLogin } from './LoginSagas'
import { postRegister } from './RegisterSagas'

/* ------------- API ------------- */

const api = API.create()

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(LoginTypes.LOGIN_REQUEST, postLogin, api),
    takeLatest(RegisterTypes.REGISTER_REQUEST, postRegister, api)
  ])
}
