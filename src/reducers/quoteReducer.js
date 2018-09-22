import {
  GET_QUOTE_CONTENT,
} from '../actions'

const initialState = {
  gettingQuotes: true,
  quoteData: { author: '', quote: '' },
  tweetURL: ''
}

export default function (state=initialState, action) {
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