import { call, put } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'
import { NavigationActions } from 'react-navigation'

export function * postLogin (api, action) {
  const { data } = action
  const response = yield call(api.postlogin, data)

  if (response.ok) {
    yield put(LoginActions.loginSuccess(response.data))
    yield put(NavigationActions.navigate({ routeName: 'Main' }))
  } else {
    yield put(LoginActions.loginFailure())
  }
}
