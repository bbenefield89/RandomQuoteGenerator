import { combineReducers } from 'redux'

import {
  GET_QUOTE_CONTENT
} from '../actions'

const initialState = {
  gettingQuotes: true,
  quoteData: {},
  tweetURL: ''
}

export const getQuoteContent = (state=initialState, action) => {
  switch (action.type) {
    case GET_QUOTE_CONTENT:
      const { author, quote, tweetURL } = action.payload

      state = {
        tweetURL,
        gettingQuotes: false,
        quoteData: { author, quote }
      }

      return state

    default:
      return state
  }
}

export const reducers = combineReducers({
  quoteContent: getQuoteContent
})