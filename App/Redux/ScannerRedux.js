import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setSelectedWallet: ['wallet']
})

export const WalletPickerTypes = Types
export default Creators

/* ------------- Initial State ------------- */
const initialWallet = null

export const INITIAL_STATE = Immutable({
  selectedWallet: initialWallet
})

/* ------------- Reducers ------------- */

export const setSelectedWallet = (state, { wallet }) => {
  return state.merge({ selectedWallet: wallet })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_SELECTED_WALLET]: setSelectedWallet
})
