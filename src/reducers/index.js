import { combineReducers } from 'redux'

import quoteReducer from './quoteReducer'

export const reducers = combineReducers({
  quoteContent: quoteReducer
})